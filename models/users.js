// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        // birthday: DataTypes.DATE
        password: DataTypes.STRING
    }, 
    {
        freezeTableName: true
    });

    return Users
}