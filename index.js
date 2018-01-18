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
        var floors = {};
        let rangeEvents = [];
        data = JSON.parse(JSON.stringify(data));

        data.map((el) => {
            if (floors[el.floor] === undefined) {
                floors[el.floor] = []
            }
            floors[el.floor].push(el);
        })

        for (var key in floors) {
            var floor = floors[key];
            floor.forEach((item, i) => {
                var events = item.Events;
                console.log(item.title);

                events.forEach(item => {
                    var start = moment(`${item.dateStart}`).utc();
                    var end = moment(`${item.dateEnd}`).utc();
                    rangeEvents.push(moment.range(start, end));

                })

                //rangeEvents = rangeEvents.splice(1);
                let newRanges = subtractRanges(day, rangeEvents);

                let newEvents = [];

                newRanges.forEach(item => {
                    newEvents.push({
                        type: 'empty',
                        dateStart: item.start.utc().format(),
                        dateEnd: item.end.utc().format()
                    })
                })

                //console.log(newEvents);
                //
                newEvents.forEach(elem => {
                    item.Events.push(elem);
                })
                //item.Events.push(newEvents);
                //console.log(item.Events);

                item.Events.sort((a,b) => {
                    return moment(b.dateStart).isBefore(moment(a.dateStart))
                })

                console.log(item.Events);
                // console.log(newRanges);
                console.log('------');
            })
            console.log('~~~~~~');
        }

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
