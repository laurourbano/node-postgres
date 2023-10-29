require('dotenv').config();
const express = require('express');
const app = express();

app.use('/test', function (req, res) {
    res.send('This is a message from the test endpoint on the server!')
});

app.listen(process.env.PORT || 3000, function () {
    console.log('App is listening on port: ' + process.env.PORT);
});