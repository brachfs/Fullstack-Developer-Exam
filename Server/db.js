const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to the database!');
});

module.exports = connection;

const connection = require('./db');

app.get('/tasks', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
