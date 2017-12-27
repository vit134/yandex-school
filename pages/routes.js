const express = require('express');

const router = express.Router();
//const { index } = require('./controllers');

router.get('/', function(req, res) {
    res.sendfile('public/app/index.html');
});

module.exports = router;
