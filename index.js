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

app.set('view engine', 'twig');
app.set('views', 'public/app/');

app.get('/', function(req, res){

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
            //console.log('in f', this);
            return subtractRanges(flat, shortRanges);
          }
        }
      }
      return longRanges;
    }


    query.rooms().then((data) => {
        var floors = {};
        //var rangeEvents = [{}];
        let rangeEvents = [{}];
        data = JSON.parse(JSON.stringify(data));


        data.map((el) => {
            if (floors[el.floor] === undefined) {
                floors[el.floor] = []
            }
            floors[el.floor].push(el);
        })


        var startDay = moment.utc('2018-01-17 08:00:00');
        var endDay   = moment.utc('2018-01-17 23:00:00');
        var day = moment.range(startDay, endDay);

        for (var key in floors) {
            var floor = floors[key];
            floor.forEach((item, i) => {
                var events = item.Events;
                console.log(item.title);

                events.forEach(item => {
                    var start = moment(`${item.dateStart}`).utc();
                    var end = moment(`${item.dateEnd}`).utc();
                    console.log('start', start);
                    console.log('end', end);
                    rangeEvents.push(moment.range(start, end));

                })

                rangeEvents = rangeEvents.splice(1);
                //console.log(day);
                let newRanges = subtractRanges(day, rangeEvents);
                console.log(newRanges);
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
