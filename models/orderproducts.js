'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    orderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  OrderProducts.associate = function(models) {
    OrderProducts.belongsTo(models.Products, {foreingKey: 'ProductId'});
    OrderProducts.belongsTo(models.Orders, {foreignKey: 'orderId'});
  };
  return OrderProducts;
};