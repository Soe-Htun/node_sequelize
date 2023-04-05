// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('products', {
        name: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        quantity: DataTypes.INTEGER,
    }, 
    {
        freezeTableName: true
    });

    return Products
}