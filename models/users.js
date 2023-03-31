// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        name: DataTypes.STRING,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        birthday: DataTypes.DATE
    }, 
    {
        freezeTableName: true
    });

    return Users
}