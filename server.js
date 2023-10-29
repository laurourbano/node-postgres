require('dotenv').config();
const app = require('./src/app');

app.listen(process.env.PORT || 3000, function () {
    console.log('App is listening on port: ' + process.env.PORT);
});