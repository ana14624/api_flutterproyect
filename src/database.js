const mysql= require('mysql');

const mysqlConnection =  mysql.createConnection({
    host: 'sql3.freemysqlhosting.net',
    user:'sql3456444',
    port: '3306',
    password: 'gmjcPFuP95',
    database: 'sql3456444'
});

mysqlConnection.connect(function (err) {
    if(err){
        crossOriginIsolated.log(err);
    }else {
        console.log('Db is connect');
    }
});

module.exports = mysqlConnection;