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

app.post('/editevent', function(req, res){
    //res.json({status: 'success'});
    var data = req.body;

    query.event(1, {id: data.eventId}).then((event) => {
        query.users().then((users) => {
            var usersAll = JSON.parse(JSON.stringify(users));
            var usersEvent = JSON.parse(JSON.stringify(event.Users));

            query.room(1, {id: event.RoomId}).then(room => {
                usersAll.forEach((userAllItem, i) => {
                    usersEvent.forEach((userEventItem, i) => {
                        if (userAllItem.id === userEventItem.id) {
                            userAllItem.allready = true;
                        }
                    })
                })

                Twig.renderFile('./public/app/blocks/editevent/main.twig', {editEvent: true, event: event, members: usersAll, room: room}, (err, html) => {
                    res.json({html: html, event: event});
                });
            })
        })
    })
});
app.post('/editeventSave', function(req, res){
    //res.json({status: 'success'});
    var data = req.body;

    mutation.updateEvent(1, {
        id: data.eventId,
        input: {
            title: data.eventTitle,
            dateStart: data.dateStart,
            dateEnd: data.dateEnd
        },
        usersIds: data.members
    }).then(event => {
        event = JSON.parse(JSON.stringify(event));
        query.rooms().then((data) => {
            data = JSON.parse(JSON.stringify(data));
            var floors = getFloors.getData(data, '2018-01-17');

            query.room(1, {id: event.RoomId}).then(room => {
                Twig.renderFile('./public/app/blocks/main/schedule.twig', {data: floors}, (err, scheduleHtml) => {
                    Twig.renderFile('./public/app/blocks/popup/event_edit.twig', {event: event, room: room}, (err, popupHtml) => {
                        res.json({scheduleHtml: scheduleHtml, popupHtml: popupHtml, event: event})
                    });
                });
            })
        })
    })
});

app.post('/deleteEvent', function(req, res){
    //res.json({status: 'success'});
    var eventId = req.body.eventId;

    mutation.removeEvent(1, {id: eventId}).then((event) => {
        console.log(event);
        event = JSON.parse(JSON.stringify(event));
        query.rooms().then((data) => {
            data = JSON.parse(JSON.stringify(data));
            var floors = getFloors.getData(data, '2018-01-17');

            Twig.renderFile('./public/app/blocks/main/schedule.twig', {data: floors}, (err, scheduleHtml) => {
                res.json({scheduleHtml: scheduleHtml})
            });
        })
    })
    .then(event => {
        console.log(event);
    })
    .catch(function(err) {
        // print the error details
        console.log(err, request.body.email);
    });
})

app.post('/getFloors', function(req, res){
    var date = req.body.date;
    console.log('index date', date);
    query.rooms().then((data) => {
        data = JSON.parse(JSON.stringify(data));
        var floors = getFloors.getData(data, new Date(date));

        res.json({
            data: floors
        })
    })
})



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