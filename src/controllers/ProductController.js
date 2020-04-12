const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  // List all products
  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  },

  // Show product by Id
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  // Create a product
  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },

  // Update a product by Id
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
