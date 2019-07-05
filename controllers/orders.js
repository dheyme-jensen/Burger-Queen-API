
const models = require('../models');
const Orders = models.Orders;
const User = models.User;
const OrderProducts = models.OrderProducts;

const getOrders = (req, res) => {
  Orders.findAll({ include: [User, OrderProducts]}).then(orders => {
    const ordersList = orders.map(orders => orders.dataValues);
    res.send(ordersList);
  });
};

const getOrdersById = (req, res) => {
  Orders.findByPk(req.params.id, { include: [User, OrderProducts]}).then(orders => {
    res.send(orders);
  });
};

const postOrders = (req, res) => {
  Orders.create(req.body).then(orders => {
    res.status(201).send(orders);
  })
};

const putOrders =  (req, res) => {
  Orders.update({ ...req.body }, { where: { id: req.params.id } }).then(() => {
    Orders.findByPk(req.params.id).then(orders => res.send(orders.dataValues));
  });
};

const deleteOrders = (req, res) => {
  Orders.destroy({ where: { id: req.params.id } }).then(orders => res.sendStatus(200));
};

module.exports = {
  getOrders,
  getOrdersById,
  postOrders,
  putOrders,
  deleteOrders
}
