const getFloors = require('./getfloors.js');
const query = require('../graphql/resolvers/query.js');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

module.exports = (function(data, start, end, users) {
    var needRange = moment.range(moment(start).utc(), moment(end).utc())
    var date = moment(start).format('YYYY-MM-DD');
    var suitableRanges = [];

    console.log('range', needRange);
    console.log('date', date);
    //console.log(data);
    data = JSON.parse(JSON.stringify(data));
    var floors = getFloors.getData(data, date);

    for (var floor in floors) {
        var floorItem = floors[floor];
        floorItem.forEach(room => {
            var events = room.Events;
            var allEvents = [];

            events.forEach(event => {
                if (moment(date).format('YYYY-MM-DD') == moment(event.dateStart).utc().format('YYYY-MM-DD')) {
                    allEvents.push(event);
                }
            })

            var emptyRanges = [];
            allEvents.forEach(event => {
                var eventStart = moment(event.dateStart).utc(),
                    eventEnd = moment(event.dateEnd).utc();

                if (event.type && event.type === 'empty') {
                    emptyRanges.push(moment.range(eventStart, eventEnd));
                }
            })

            emptyRanges.forEach(range => {
                if (range.contains(needRange)) {
                    suitableRanges.push({
                        floor: floor,
                        roomTitle: room.title,
                        roomId: room.id,
                        capMin: room.capacityMin,
                        capMax: room.capacityMax,
                        timeStart: range.start,
                        timeEnd: range.end
                    });
                }
            })
        })
    }

    //console.log(suitableRanges);

    if (users.length > 0) {
        var usersSuitableRanges = [];

        suitableRanges.forEach((item, i) => {
            if (users.length >= item.capMin && users.length <= item.capMax) {
                usersSuitableRanges.push(item);
            }
        })

        suitableRanges = usersSuitableRanges;
        suitableRanges.forEach(item => {
            var countFloor = 0;

            users.forEach(user => {
                countFloor = countFloor + Math.abs(item.floor - user.homeFloor)
            })

            item.countFloor = countFloor;
        })

        suitableRanges.sort((a, b) => {
            return a.countFloor - b.countFloor;
        })
    }

    return suitableRanges;
})