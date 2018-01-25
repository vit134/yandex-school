const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);


var aa = module.exports = {
    subtractRanges(longRanges, shortRanges) {
      // Always return an array
      if (shortRanges.length === 0)
        return longRanges.hasOwnProperty("length") ? longRanges : [longRanges];

      // Result is empty range
      if (longRanges.length === 0) return [];

      if (!longRanges.hasOwnProperty("length")) longRanges = [longRanges];

      for (let long in longRanges) {
        for (let short in shortRanges) {
          longRanges[long] = longRanges[long].subtract(shortRanges[short]);
          if (longRanges[long].length === 0) {
            // Subtracted an entire range, remove it from list
            longRanges.splice(long, 1);
            shortRanges.splice(0, short);
            return aa.subtractRanges(longRanges, shortRanges);
          } else if (longRanges[long].length === 1) {
            // No subtraction made, but .subtract always returns arrays
            longRanges[long] = longRanges[long][0];
          } else {
            // Successfully subtracted a subrange, flatten and recurse again
            const flat = [].concat(...longRanges);
            shortRanges.splice(0, short);
            return aa.subtractRanges(flat, shortRanges);
          }
        }
      }
      return longRanges;
    },
    getData(data, date, exclude) {
        console.log('getdate exclude', exclude);
        let startDay =  moment(moment(date).format('YYYY-MM-DD') + 'T08:00:00.000Z').utc(),
            endDay = moment(moment(date).format('YYYY-MM-DD') + 'T23:00:00.000Z').utc(),
            day = moment.range(startDay, endDay);

        var floors = {};

        data.forEach(function(value){
            if(typeof floors[value.floor] == 'undefined')
                floors[value.floor] = [];

            floors[value.floor].push(value);
        });

        for (var floor in floors) {
            floor = floors[floor];

            floor.forEach(room => {
                var events = room.Events;
                let rangeEvents = [];
                //console.log(room.title);
                var needDateEvents = [];
                // console.log('-----');
                // console.log(room.title);

                events.forEach(event => {
                    if (moment(date).format('YYYY-MM-DD') == moment(event.dateStart).utc().format('YYYY-MM-DD')) {
                        needDateEvents.push(event);
                    }
                })

                /*
                если параметр exclude не пустой убираю из массива исключающий эвент
                 */
                if (exclude && exclude != '') {
                    needDateEvents = needDateEvents.filter(event => {
                        console.log(event.id != exclude);
                        return event.id != exclude
                    })
                }

                needDateEvents.forEach((event, i) => {
                    var start = moment(event.dateStart).utc(),
                        end = moment(event.dateEnd).utc();
                        rangeEvents.push(moment.range(start, end));

                    var diff = end.diff(start, 'minute');
                    event['width'] = diff / 15;

                    //console.log('needDateEvents', i);
                });

                var newRanges = aa.subtractRanges(day, rangeEvents);
                //console.log(newRanges);
                var newEvents = [];
                newRanges.forEach(item => {
                    var start = item.start.utc(),
                        end = item.end.utc()
                    newEvents.push({
                        type: 'empty',
                        dateStart: start.format(),
                        dateEnd: end.format(),
                        width: end.diff(start, 'minute') / 15
                    })
                })
                
                newEvents.forEach(elem => {
                    needDateEvents.push(elem);
                })

                room.Events = needDateEvents;



                room.Events.sort((a,b) => {
                    return moment(b.dateStart).isBefore(moment(a.dateStart))
                })

                //console.log(room.Events);
            })
        }

        return floors;
    }
}