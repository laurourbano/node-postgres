const pg = require('pg');
const connectionString = process.env.CONNECTION_STRING;
const client = new pg.Client(connectionString);
client.connect().then(() => console.log('bd connected'));

async function getUsers() {
    return await client.query('SELECT * FROM users');
};

async function getUserById(id) {
    const values = [id];
    const results = await client.query('SELECT FROM users WHERE id = ?;', values);
    return results[0];
};

async function createUser(user) {
    return await client.query(`INSERT INTO users (username, password) VALUES ('${user.username}', '${user.password}')`);
};

async function updateUser(id, user) {
    return await client.query(`UPDATE users SET username = '${user.username}', password = '${user.password}' WHERE id = ${id}`);
};

async function deleteUser(id) {
    return await client.query(`DELETE FROM users WHERE id = ${id}`);
};



module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};