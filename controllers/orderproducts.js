
const models = require('../models');
const OrderProducts = models.OrderProducts;
const Products = models.Products;

const getOrderProducts = (req, res) => {
  OrderProducts.findAll({ include: [Products] }).then(orderProducts => {
    const orderProductsList = orderProducts.map(orderProducts => orderProducts.dataValues);
    res.send(orderProductsList);
  });
};

const getOrderProductsById = (req, res) => {
  OrderProducts.findByPk(req.params.id, { include: [Products] }).then(orderProducts => {
    res.send(orderProducts);
  });
};

const postOrderProducts = (req, res) => {
  OrderProducts.create(req.body).then(orderProducts => {
    res.status(201).send(orderProducts);
  })
};

const putOrderProducts = (req, res) => {
  Products.update({ ...req.body }, { where: { id: req.params.id } }).then(() => {
    OrderProducts.findByPk(req.params.id).then(orderProducts => res.send(orderProducts.dataValues));
  });
};

const deleteOrderProducts = (req, res) => {
  OrderProducts.destroy({ where: { id: req.params.id } }).then(orderProducts => res.sendStatus(200));
};

module.exports = {
  getOrderProducts,
  getOrderProductsById,
  postOrderProducts,
  putOrderProducts,
  deleteOrderProducts
}
