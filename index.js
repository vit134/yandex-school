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
        data = JSON.parse(JSON.stringify(data));

        data.map((el) => {
            if (floors[el.floor] === undefined) {
                floors[el.floor] = []
            } 

            floors[el.floor].push(el);
        })


        var start = new Date(2018, 0, 17, 8, 0, 0);
        var end   = new Date(2018, 0, 17, 23, 0, 0);
        var range = moment.range(start, end);
        console.log(new Date('2018-01-17T08:00:00.000Z'));
        console.log(new Date('2018-01-17T09:30:00.000Z'));
        console.log(range.subtract(moment.range(new Date('2018-01-17T05:00:00.000Z'), new Date('2018-01-17T06:30:00.000Z'))))



        for (var key in floors) {
            var floor = floors[key];
            floor.forEach((item, i) => {
                var events = item.Events;
                console.log(item.title);
                var diff = [];
                events.forEach((item) => {
                    //console.log(moment.range(item.dateStart, item.dateEnd));
                    console.log(range.subtract(moment.range(item.dateStart, item.dateEnd)));
                       
                })
                console.log(diff);
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
