module.exports = {
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
            return subtractRanges(longRanges, shortRanges);
          } else if (longRanges[long].length === 1) {
            // No subtraction made, but .subtract always returns arrays
            longRanges[long] = longRanges[long][0];
          } else {
            // Successfully subtracted a subrange, flatten and recurse again
            const flat = [].concat(...longRanges);
            shortRanges.splice(0, short);
            return subtractRanges(flat, shortRanges);
          }
        }
      }
      return longRanges;
    },
    getData(data) {
        var floors = [];
        var d = {};

        data.forEach(function(value){
            if(typeof d[value.floor] == 'undefined')
                d[value.floor] = [];

            d[value.floor].push(value);
        });

        floors = Object.keys(d).map(key => {
            return d[key];
        })

        floors.forEach(floor => {
            floor.forEach(room => {
                var events = room.Events;
                let rangeEvents = [];
                events.forEach((event, i) => {
                    var start = moment(events[i].dateStart).utc(),
                        end = moment(events[i].dateEnd).utc();

                    rangeEvents.push(moment.range(start, end));

                    var diff = end.diff(start, 'minute');
                    room.Events[i]['width'] = diff / 15;
                });

                var newRanges = subtractRanges(day, rangeEvents);
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
                    room.Events.push(elem);
                })

                room.Events.sort((a,b) => {
                    return moment(b.dateStart).isBefore(moment(a.dateStart))
                })
            })
        });

        return floors;
    }
}