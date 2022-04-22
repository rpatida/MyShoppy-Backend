const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  return res.status(201).json({
    success: true,
    product,
  });
};

exports.getAllProducts = async (req, res) => {
  const product = await Product.find();

  if (!product) {
    return res.status(201).json({
      success: true,
      message: "Products are not available",
    });
  }

  return res.status(200).json({
    success: true,
    count: product.length,
    product,
  });
};
