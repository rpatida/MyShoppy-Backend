const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body);

  return res.status(200).json({
    success: true,
    order,
  });
};

exports.getAllOrder = async (req, res) => {
  const order = await Order.find();

  if (!order) {
    return res.status(201).json({
      success: false,
      message: "Order are not available",
    });
  }

  return res.status(200).json({
    success: true,
    count: order.length,
    order,
  });
};
