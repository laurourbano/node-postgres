require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

sequelize.sync({
    force: true
});

sequelize.authenticate().then(
    function () {
        console.log('Conectado ao banco de dados ' + process.env.DB_NAME);
    },
    function (err) {
        console.log(err);
    }
);