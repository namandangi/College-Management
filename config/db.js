const mysql = require('mysql');
const { host, user, password, database } = require('./constants');
const dbConnection = () => {
    var connection = mysql.createConnection({
        host     : host,
        user     : user,
        password : password,
        database : database
    });

    connection.connect((err) => {
        if (err) {
        console.error('error connecting: ' + err.stack);
        return;
        }
    
        console.log('DB connected as id ' + connection.threadId);
    });

    return connection;
}
module.exports = { dbConnection };