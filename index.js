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

    var url = 'http://localhost:3000/graphql?query=query rooms { id title capacity floor events { id title users { id login } } }';
    var rooms;
    query.rooms().then((data) => {
        var rooms = [];
        console.log('index', data);

        res.render('index', {
            enableAddButton: true,
            data: data
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
