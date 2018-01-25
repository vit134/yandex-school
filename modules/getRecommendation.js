const getFloors = require('./getfloors.js');
const query = require('../graphql/resolvers/query.js');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

module.exports = (function(data, start, end, users) {
    var needRange = moment.range(moment(start).utc(), moment(end).utc())
    var date = moment(start).format('YYYY-MM-DD');
    var needdEmptyEvents = [];
    var suitableRanges = [];
    var suitableBusyRanges = [];

    // console.log('range', needRange);
    // console.log('date', date);
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
            var busyRanges = [];
            allEvents.forEach(event => {
                var eventStart = moment(event.dateStart).utc(),
                    eventEnd = moment(event.dateEnd).utc();

                if (event.type && event.type === 'empty') {
                    emptyRanges.push(moment.range(eventStart, eventEnd));
                } else {
                    busyRanges.push(event);
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

                    // needdEmptyEvents.push({
                    //     floor: floor,
                    //     roomTitle: room.title,
                    //     roomId: room.id,
                    //     capMin: room.capacityMin,
                    //     capMax: room.capacityMax,
                    //     timeStart: range.start,
                    //     timeEnd: range.end
                    // })
                }

                //var startNE = new Date()

                if (range.isSame(moment.range(start,end))) {
                    needdEmptyEvents.push({
                        floor: floor,
                        roomTitle: room.title,
                        roomId: room.id,
                        capMin: room.capacityMin,
                        capMax: room.capacityMax,
                        timeStart: range.start,
                        timeEnd: range.end
                    })
                }
            })

            busyRanges.forEach(event => {
                if (moment.range(event.dateStart, event.dateEnd).isSame(needRange)) {
                    suitableBusyRanges.push({
                        floor: floor,
                        roomTitle: room.title,
                        roomId: room.id,
                        eventId: event.id,
                        capMin: room.capacityMin,
                        capMax: room.capacityMax,
                        timeStart: event.dateStart,
                        timeEnd: event.dateEnd,
                        users: event.Users.length
                    });
                }
            })
        })
    }


    if (users && users.length > 0) {
        var usersSuitableRanges = [];
        var usersSuitableBusyRanges = [];

        suitableRanges.forEach((item, i) => {
            if (users.length >= item.capMin && users.length <= item.capMax) {
                //console.log('push');
                usersSuitableRanges.push(item);
            }
        })

        suitableBusyRanges.forEach((item, i) => {
            if (users.length >= item.capMin && users.length <= item.capMax) {
                usersSuitableBusyRanges.push(item);
            }
        })

        suitableRanges = usersSuitableRanges;
        suitableBusyRanges = usersSuitableBusyRanges;

        suitableRanges.forEach(item => {
            var countFloor = 0;

            users.forEach(user => {
                countFloor = countFloor + Math.abs(item.floor - user.homeFloor)
            })

            item.countFloor = countFloor;
        })

        suitableBusyRanges.forEach(item => {
            var countFloor = 0;

            users.forEach(user => {
                countFloor = countFloor + Math.abs(item.floor - user.homeFloor)
            })

            item.countFloor = countFloor;
        })

        suitableRanges.sort((a, b) => {
            return a.countFloor - b.countFloor;
        })

        suitableBusyRanges.sort((a, b) => {
            return a.countFloor - b.countFloor;
        })

    }

    if (suitableRanges.length == 0) {
        console.log('suitableRanges === 0');
        let replaceEventMap = [];
        console.log('suitableBusyRanges',suitableBusyRanges);
        console.log('needdEmptyEvents',needdEmptyEvents);
        needdEmptyEvents.forEach(itemAll => {
            suitableBusyRanges.forEach(itemBusy => {
                var allRange = moment.range(itemAll.timeStart, itemAll.timeEnd),
                    busyRange = moment.range(itemBusy.timeStart, itemBusy.timeEnd);

                console.log('---');
                //console.log(busyRange.contains(allRange));
                if (busyRange.contains(allRange)) {
                    console.log('±±±±');
                    //тут нужно сранивать не сколько юзеров пришло а сколько юзеров в занятом евенте
                    if (itemBusy.users >= itemAll.capMin && itemBusy.users <= itemAll.capMax) {
                        replaceEventMap.push({
                            empty: itemAll,
                            busy: itemBusy,
                            map: [itemAll.roomId, itemBusy.eventId]
                        });
                    }
                }
            })
        })

        console.log('replaceEventMap',replaceEventMap);
        return {type: 'replace', rooms: replaceEventMap};
    } else {
        console.log('emty', suitableRanges);
        return {type: 'empty', rooms: suitableRanges};
    }

    // console.log('busy', suitableBusyRanges);
    // return suitableRanges;
})