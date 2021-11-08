const mysql= require('mysql');

const mysqlConnection =  mysql.createConnection({
    host: 'sql5.freemysqlhosting.net',
    user:'sql5449581',
    port: '3306',
    password: 'teLBwm5eRN',
    database: 'sql5449581'
});

mysqlConnection.connect(function (err) {
    if(err){
        crossOriginIsolated.log(err);
    }else {
        console.log('Db is connect');
    }
});

module.exports = mysqlConnection;