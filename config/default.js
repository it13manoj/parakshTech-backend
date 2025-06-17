require('dotenv').config(); // Load .env variables

module.exports = {
  db: {
    database: process.env.DATABASE,
    username: process.env.APP_DB_USERNAME,
    password: process.env.APP_DB_PASSWORD,
    host: process.env.HOST,
    dialect: 'mysql',
  }
};
