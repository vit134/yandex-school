const path = require('path');

const express = require('express');
const {twig} = require('twig');

const bodyParser = require('body-parser');

//const pagesRoutes = require('./pages/routes');
const graphqlRoutes = require('./graphql/routes');

const app = express();

app.use(bodyParser.json());

app.set('view engine', 'twig');
app.set('views', 'public/app/');

app.get('/', function(req, res){
    res.render('index', {
        enableAddButton: true
    });
});

app.get('/newevent', function(req, res){
    res.render('new-event', {
        enableAddButton: false,
        footer: true,
        newEvent: true
    });
});

//app.use('/', pagesRoutes)
app.use('/graphql', graphqlRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Express app listening on localhost:3000'));
