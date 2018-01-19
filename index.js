const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

const path = require('path');
const query = require('./graphql/resolvers/query.js');
const express = require('express');
const {twig} = require('twig');

const bodyParser = require('body-parser');

const graphqlRoutes = require('./graphql/routes');

const app = express();

app.use(bodyParser.json());

console.log(moment().format());

app.set('view engine', 'twig');
app.set('views', 'public/app/');

let startDay = moment('2018-01-17T08:00:00.000Z').utc();
let endDay   = moment('2018-01-17T23:00:00.000Z').utc();
let day = moment.range(startDay, endDay);



function subtractRanges(longRanges, shortRanges) {
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
}

app.get('/', function(req, res){

    query.rooms().then((data) => {
        var floors = [];
        var d = {};

        let rangeEvents = [];
        data = JSON.parse(JSON.stringify(data));
        console.log(data);
        data.forEach(function(value){
            if(typeof d[value.floor] == 'undefined')
                d[value.floor] = [];

            d[value.floor].push(value);
        });

        floors = Object.keys(d).map(key => {
            return d[key];
        })

        //console.log(JSON.stringify(floors));
        //console.log(floors);

        floors.forEach(floor => {
            floor.forEach(room => {
                var events = room.Events;
                console.log(room.title);

                events.forEach((event, i) => {
                    let start = moment(`${event.dateStart}`).utc();
                    let end = moment(`${event.dateEnd}`).utc();

                    console.log('start', start);
                    console.log('end', end);
                    rangeEvents.push(moment.range(start, end));

                    var diff = end.diff(start, 'minute');
                    room.Events[i]['width'] = diff / 15;
                });

                let newRanges = subtractRanges(day, rangeEvents);
                console.log('**');
                newRanges.forEach(aa => {
                    console.log('start after', aa.start.utc().format());
                    console.log('end after', aa.end.utc().format());
                    console.log('**');
                });

                let newEvents = [];

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

                console.log(room.Events);

                console.log('------');
            })
            console.log('~~~~~~');
        });

        res.render('index', {
            enableAddButton: true,
            data: floors
        });
    })
});

app.get('/newevent', function(req, res){
    res.render('new-event', {
        enableAddButton: false,
        footer: true,
        newEvent: true
    });
});

app.use('/graphql', graphqlRoutes.router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Express app listening on localhost:3000'));
