var Sequelize = require('sequelize');

// new Sequelize('database', 'username', 'password', options)
var db = new Sequelize('postgres', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = db;