const config = require('config');
const { Sequelize } = require('sequelize');

const { database, username, password, host, dialect } = config.get('db');

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = sequelize;