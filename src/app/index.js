const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./database');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

app.get('/api/users', async (req, res) => {
    const results = await db.getUsers();
    res.status(200).json(results.rows);
});

app.get('/api/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const results = await db.getUserById(id);
    console.log(results.rows[0])
    res.status(200).json(results.rows[0]);
});

app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'User created successfully'
    });
});

app.patch('/api/users/:id', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'User updated successfully'
    });
});

app.delete('/api/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        message: 'User deleted successfully'
    });
});

module.exports = app;