
const mysql = require('mysql2');
const{host,database,user,password} = require('../config/config')
// const connection = mysql.createConnection({
//     host: host,
//     database: database,
//     user:user,
//     password: password
//   });



  module.exports.connection = mysql.createConnection({
    host: "localhost",
    database: 'codes_for_tomarrow',
    user: 'root',
    password: 'Jv@12345678'
  });
// module.exports.connection = connection
  