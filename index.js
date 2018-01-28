const path = require('path');
const query = require('./graphql/resolvers/query.js');
const mutation = require('./graphql/resolvers/mutation.js');
const getFloors = require('./modules/getfloors.js');
const getRecommendation = require('./modules/getRecommendation.js');
const express = require('express');
const Twig = require('twig');
const twig = Twig.twig;

const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

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
    //console.log(new Date() + new Date().getTimezoneOffset() / 60);
    //console.log(moment().format('YYYY-MM-DD') + 'z');
    query.rooms().then((data) => {
        data = JSON.parse(JSON.stringify(data));

        var floors = getFloors.getData(data, moment().format('YYYY-MM-DD') + 'z');

        res.render('index', {
            data: floors
        });
    })
});

app.post('/newevent', function(req, res){
    var data = req.body;
    query.users().then((users) => {
        users = JSON.parse(JSON.stringify(users));

        query.room(1, {id: data.roomId}).then(room => {
            query.rooms().then(rooms => {
                rooms = JSON.parse(JSON.stringify(rooms));
                var recommendRooms = [];

                console.log('index /newevent rooms', rooms);
                if (data.dateStart) {
                    var floors = getFloors.getData(rooms, moment(data.dateStart).format('YYYY-MM-DD') + 'z');
                    recommendRooms = getRecommendation(floors, data.dateStart, data.dateEnd, [])

                }
                //console.log('recommendRooms',recommendRooms);
                Twig.renderFile('./public/app/blocks/newevent/main.twig', {members: users, room: room, data: data, recommendRooms: recommendRooms.rooms, from: data.from}, (err, html) => {
                    res.json({
                        html: html,
                        room: room,
                        recommendRooms: recommendRooms.rooms,
                        from: data.from
                    })
                });
            })
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
    var data = req.body;
    var needDate = data.dateStart;

    var members = [];
    if (data.members && data.members.length > 0) {
        data.members.forEach(member => {
            members.push(member.id);
        })
    }

    if (!data.roomReplace) {

        mutation.createEvent(1, {input: {
            title: data.eventTitle,
            dateStart: data.dateStart,
            dateEnd: data.dateEnd
        }, usersIds: members, roomId: data.room}).then(event => {
            event = JSON.parse(JSON.stringify(event));

            query.rooms().then((data) => {
                data = JSON.parse(JSON.stringify(data));
                var floors = getFloors.getData(data, needDate);

                query.room(1, {id: event.RoomId}).then(room => {
                    Twig.renderFile('./public/app/blocks/main/schedule.twig', {data: floors}, (err, scheduleHtml) => {
                        Twig.renderFile('./public/app/blocks/popup/event_create.twig', {
                            event: event,
                            room: room
                        }, (err, popupHtml) => {
                            res.json({scheduleHtml: scheduleHtml,
                                popupHtml: popupHtml,
                                event: event
                            })
                        });
                    });
                })
            })
        })
    } else {
        mutation.changeEventRoom(1, {
            id: data.roomReplace.busyEventId,
            roomId: data.roomReplace.emptyRoomId
        }).then(() => {


            mutation.createEvent(1, {input: {
                title: data.eventTitle,
                dateStart: data.dateStart,
                dateEnd: data.dateEnd
            }, usersIds: members, roomId: data.room}).then(event => {

                event = JSON.parse(JSON.stringify(event));
                query.rooms().then((data) => {
                    data = JSON.parse(JSON.stringify(data));
                    var floors = getFloors.getData(data, needDate);

                    query.room(1, {id: event.RoomId}).then(room => {
                        Twig.renderFile('./public/app/blocks/main/schedule.twig', {data: floors}, (err, scheduleHtml) => {
                            Twig.renderFile('./public/app/blocks/popup/event_create.twig', {event: event, room: room}, (err, popupHtml) => {
                                res.json({scheduleHtml: scheduleHtml, popupHtml: popupHtml, event: event})
                            });
                        });
                    })
                })
            })
        })
    }
});

app.post('/editevent', function(req, res){
    //res.json({status: 'success'});
    var data = req.body;

    query.event(1, {id: data.eventId}).then((event) => {

        query.users().then((users) => {
            var usersAll = JSON.parse(JSON.stringify(users));
            var usersEvent = JSON.parse(JSON.stringify(event.Users));

            query.room(1, {id: event.RoomId}).then(room => {
                room = JSON.parse(JSON.stringify(room));

                usersAll.forEach((userAllItem) => {
                    usersEvent.forEach((userEventItem) => {
                        if (userAllItem.id === userEventItem.id) {
                            userAllItem.allready = true;
                        }
                    })
                })

                Twig.renderFile('./public/app/blocks/editevent/main.twig', {editEvent: true, event: event, members: usersAll, room: room, from: data.from}, (err, html) => {
                    res.json({html: html, event: event, from: data.from});
                });
            })
        })
    })
});
app.post('/editeventSave', function(req, res){
    //res.json({status: 'success'});
    var data = req.body;
    var needDate = data.dateStart;

    var members = [];
    if (data.members && data.members.length > 0) {
        data.members.forEach(member => {
            members.push(member.id);
        })
    }

    mutation.updateEvent(1, {
        id: data.eventId,
        input: {
            title: data.eventTitle,
            dateStart: data.dateStart,
            dateEnd: data.dateEnd
        },
        usersIds: members
    }).then(event => {
        event = JSON.parse(JSON.stringify(event));
        query.rooms().then((data) => {
            data = JSON.parse(JSON.stringify(data));
            var floors = getFloors.getData(data, needDate);

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
    var needDate = req.body.dateStart;

    mutation.removeEvent(1, {id: eventId}).then((event) => {
        //console.log(event);
        event = JSON.parse(JSON.stringify(event));
        query.rooms().then((data) => {
            data = JSON.parse(JSON.stringify(data));
            var floors = getFloors.getData(data, needDate);

            Twig.renderFile('./public/app/blocks/main/schedule.twig', {data: floors}, (err, scheduleHtml) => {
                res.json({scheduleHtml: scheduleHtml})
            });
        })
    }).then(event => {
        //console.log(event);
    }).catch(function(err) {
        // print the error details
        //console.log(err, request.body.email);
    });
})

app.post('/getFloors', function(req, res){
    var date = req.body.date;
    console.log('index /getfloors new Date(date)', moment(date));
    query.rooms().then((data) => {
        data = JSON.parse(JSON.stringify(data));
        var floors = getFloors.getData(data, moment(date).format('YYYY-MM-DD') + 'z');

        Twig.renderFile('./public/app/blocks/main/schedule.twig', {data: floors}, (err, scheduleHtml) => {
            res.json({scheduleHtml: scheduleHtml, data: floors})
        });
    })
})

app.post('/getRecommendation', function(req, res){
    var reqData = req.body;
    //console.log('reqData', reqData);
    console.log(reqData.eventId);
    query.rooms().then((data) => {
        data = JSON.parse(JSON.stringify(data));
        console.log('index getRec reqData', reqData.dateStart);
        var floors = getFloors.getData(data, reqData.dateStart, reqData.eventId);

        var recommendRooms = getRecommendation(JSON.parse(JSON.stringify(floors)), reqData.dateStart, reqData.dateEnd, reqData.members);

        if (recommendRooms.type === 'empty') {
            Twig.renderFile('./public/app/blocks/fields/room_recommend.twig', {
                recommendRooms: recommendRooms.rooms,
                data: {
                    dateStart: reqData.dateStart,
                    dateEnd: reqData.dateEnd
                }
            }, (err, html) => {
                res.json({recommendHtml: html, recommendRooms: recommendRooms.rooms})
            });
        } else if (recommendRooms.type === 'replace') {
            Twig.renderFile('./public/app/blocks/fields/room_recommend_replace.twig', {
                recommendRooms: recommendRooms.rooms,
                data: {
                    dateStart: reqData.dateStart,
                    dateEnd: reqData.dateEnd
                }
            }, (err, html) => {
                res.json({recommendHtml: html, recommendRooms: recommendRooms.rooms})
            });
        }
    })

});

app.use('/graphql', graphqlRoutes.router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Express app listening on localhost:3000'));