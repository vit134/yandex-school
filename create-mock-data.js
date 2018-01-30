const {models, sequelize} = require('./models');

function createData() {
    let usersPromise = models.User.bulkCreate([
        {
            login: 'veged',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/15365?s=460&v=4',
            homeFloor: 1
        },
        {
            login: 'alt-j',
            avatarUrl: 'https://avatars1.githubusercontent.com/u/3763844?s=400&v=4',
            homeFloor: 3
        },
        {
            login: 'yeti-or',
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1813468?s=460&v=4',
            homeFloor: 2
        },
        {
            login: 'dart vaider',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/15365?s=460&v=4',
            homeFloor: 5
        },
        {
            login: 'pupsik pupsikovich',
            avatarUrl: 'https://avatars1.githubusercontent.com/u/3763844?s=400&v=4',
            homeFloor: 7
        },
        {
            login: 'ivan vasechkin',
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1813468?s=460&v=4',
            homeFloor: 1
        },
        {
            login: 'lalaleila',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/15365?s=460&v=4',
            homeFloor: 4
        },
        {
            login: 'obi van kanobi',
            avatarUrl: 'https://avatars1.githubusercontent.com/u/3763844?s=400&v=4',
            homeFloor: 6
        },
        {
            login: 'fucking yeti',
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1813468?s=460&v=4',
            homeFloor: 5
        }
    ]);

    let roomsPromise = models.Room.bulkCreate([
        {
            title: 'Ржавый Фред',
            capacityMax: 6,
            capacityMin: 3,
            floor: 7
        },
        {
            title: 'Прачечная',
            capacityMax: 10,
            capacityMin: 0,
            floor: 7
        },
        {
            title: 'Жёлтый дом',
            capacityMax: 10,
            capacityMin: 0,
            floor: 3
        },
        {
            title: 'Оранжевый тюльпан',
            capacityMax: 10,
            capacityMin: 0,
            floor: 3
        },
        {
            title: 'Джокер',
            capacityMax: 4,
            capacityMin: 0,
            floor: 4
        },
        {
            title: 'Мариванна',
            capacityMax: 6,
            capacityMin: 3,
            floor: 4
        },
        {
            title: 'Тонкий Боб',
            capacityMax: 8,
            capacityMin: 4,
            floor: 5
        },
        {
            title: 'Чёрная вдова',
            capacityMax: 6,
            capacityMin: 3,
            floor: 6
        },
        {
            title: 'Белорусский ликёр',
            capacityMax: 2,
            capacityMin: 2,
            floor: 6
        }

    ]);

    /*const HOUR = 60 * 60 * 1000;
    let now = new Date();
    let currentDay = now.getDate();
    if (now.getHours() + 1 < 8) {
        now = new Date(2018, 0, currentDay, 11, 0, 0)
    } else if (now.getHours() + 1 > 24) {
        now = new Date(2018, 0, currentDay + 11, 8, 0, 0)
    }

    let oneHourLater = new Date(now.getTime() + HOUR);
    let twoHoursLater = new Date(oneHourLater.getTime() + HOUR);*/

    let eventsPromise = models.Event.bulkCreate([
        {
            title: 'ШРИ 2018 - начало',
            dateStart: '2018-01-17T08:00:00.000Z',
            dateEnd: '2018-01-17T09:30:00.000Z'
        },
        {
            title: '👾 15:30 - 16:15 👾',
            dateStart: '2018-01-17T15:30:00.000Z',
            dateEnd: '2018-01-17T16:15:00.000Z'
        },
        {
            title: '🍨 16:15 - 17:30',
            dateStart: '2018-01-17T16:15:00.000Z',
            dateEnd: '2018-01-17T17:30:00.000Z'
        },
        {
            title: '🍨 18:45 - 19:30',
            dateStart: '2018-01-17T18:45:00.000Z',
            dateEnd: '2018-01-17T19:30:00.000Z'
        }
    ]);

    Promise.all([usersPromise, roomsPromise, eventsPromise])
        .then(() => Promise.all([
            models.User.findAll(),
            models.Room.findAll(),
            models.Event.findAll()
        ]))
        .then(function([users, rooms, events]) {
            let promises = [];
            /*promises.push(events[0].setRoom(rooms[0]));
            promises.push(events[1].setRoom(rooms[1]));
            promises.push(events[2].setRoom(rooms[2]));

            promises.push(events[0].setUsers([users[0], users[1]]));
            promises.push(events[1].setUsers([users[1], users[2]]));
            promises.push(events[2].setUsers([users[0], users[2]]));

            promises.push(rooms[0].setEvents([events[0], events[2]]));
            promises.push(rooms[1].setEvents([events[0], events[1], events[2]]));
            promises.push(rooms[2].setEvents([events[0], events[2]]));
            promises.push(rooms[3].setEvents([events[0], events[1]]));
            promises.push(rooms[4].setEvents([events[0], events[1], events[2]]));
            promises.push(rooms[5].setEvents([events[0], events[2]]));
            promises.push(rooms[6].setEvents([events[0], events[1]]));
            promises.push(rooms[7].setEvents([events[0], events[1], events[2]]));
            promises.push(rooms[8].setEvents([events[0], events[2]]));*/

            return Promise.all(promises);
        });
}

sequelize.sync()
    .then(createData);