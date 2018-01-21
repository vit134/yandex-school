const path = require('path');
const query = require('./graphql/resolvers/query.js');
const mutation = require('./graphql/resolvers/mutation.js');
const getFloors = require('./modules/getfloors.js');
const express = require('express');
const Twig = require('twig');
const twig = Twig.twig;

const bodyParser = require('body-parser');

const graphqlRoutes = require('./graphql/routes');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'twig');
app.set('views', 'public/app/');



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
        data = JSON.parse(JSON.stringify(data));
        var floors = getFloors.getData(data, '2018-01-17');
        res.render('index', {
            enableAddButton: true,
            data: floors
        });
    })
});

app.post('/newevent', function(req, res){
    var data = req.body;

    query.users().then((users) => {
        users = JSON.parse(JSON.stringify(users));

        query.room(1, {id: data.roomId}).then(room => {
            Twig.renderFile('./public/app/blocks/newevent/main.twig', {members: users, room: room, data: data}, (err, html) => {
                res.json({html: html, room: room})
            });
        })
    })
});

app.post('/tooltip', function(req, res){
    var data = req.body;

    query.event(1, {id: data.eventId}).then((event) => {
        event = JSON.parse(JSON.stringify(event));
        query.room(1, {id: event.RoomId}).then(room => {
            Twig.renderFile('./public/app/blocks/tooltip/main.twig', {event: event, room: room}, (err, html) => {
                res.json({html: html, room: room})
            });
        })
    })
});

app.post('/createevent', function(req, res){
    console.log('createevent');
    var data = req.body;
    console.log(data);

    mutation.createEvent(1, {input: {
        title: data.eventTitle,
        dateStart: data.dateStart,
        dateEnd: data.dateEnd
    }, usersIds: data.members, roomId: data.room}).then(event => {
        event = JSON.parse(JSON.stringify(event));
        query.rooms().then((data) => {
            data = JSON.parse(JSON.stringify(data));
            var floors = getFloors.getData(data, '2018-01-17');

            query.room(1, {id: event.RoomId}).then(room => {
                Twig.renderFile('./public/app/blocks/main/schedule.twig', {data: floors}, (err, scheduleHtml) => {
                    Twig.renderFile('./public/app/blocks/popup/event_create.twig', {event: event, room: room}, (err, popupHtml) => {
                        res.json({scheduleHtml: scheduleHtml, popupHtml: popupHtml, event: event})
                    });
                });
            })
        })
    })
});

// app.get('/newevent', function(req, res){
//     res.render('new-event', {
//         enableAddButton: false,
//         footer: true,
//         newEvent: true
//     });
// })

app.use('/graphql', graphqlRoutes.router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Express app listening on localhost:3000'));