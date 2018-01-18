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


    query.rooms().then((data) => {
        var floors = {};
        var rangeEvents = [];
        data = JSON.parse(JSON.stringify(data));

        data.map((el) => {
            if (floors[el.floor] === undefined) {
                floors[el.floor] = []
            }

            floors[el.floor].push(el);
        })


        var startDay = moment('2018-0-17 08:0:00');
        var endDay   = new Date(2018, 0, 17, 23, 0, 0);
        var range = moment.range(startDay, endDay);

        for (var key in floors) {
            var floor = floors[key];
            floor.forEach((item, i) => {
                var events = item.Events;
                console.log(item.title);
                events.forEach((item) => {
                    var start = moment.utc(moment.parseZone(item.dateStart).utc().format());
                    var end  = moment.utc(moment.parseZone(item.dateEnd).utc().format());
                    console.log(item.dateStart, item.dateEnd);
                    /*console.log('item',item);
                    console.log('start',start);
                    console.log('end',end);*/
                    rangeEvents.push(moment.range(start, end));

                })
                console.log(rangeEvents);
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
