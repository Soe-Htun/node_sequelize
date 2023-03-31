// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, 
    {
        freezeTableName: true
    });

    return Users
}