const Sequelize = require('sequelize');
const dbConfig = require('../config/db_config');

const sequelize = new Sequelize(dbConfig.DB_DATABASE, dbConfig.DB_USER, dbConfig.DB_PASSWORD, {
    host: dbConfig.DB_HOST,
    dialect: dbConfig.DIALECT
});

const db = {}
db.sequelize = sequelize;
// db.models = {}
db.Users = require('./users')(sequelize, Sequelize.DataTypes);
db.Products = require('./products')(sequelize, Sequelize.DataTypes)

module.exports = db;