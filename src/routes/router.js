const express = require('express');
const router = express.Router();
const sequelize = require('../models/database');

router.get('/', function (req, res) {
    res.send('This is the principal API endpoint');
});

router.use('/test', function (req, res) {
    res.send('This is a message from the test endpoint on the server!')
});

module.exports = router;