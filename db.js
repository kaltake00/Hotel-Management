const mysql = require('mysql');

const db = mysql.createPool({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'hotel_management'
});

module.exports = db;