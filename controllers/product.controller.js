const service = require("../services/product.service")

exports.getProducts = async (req, res) => {
  const products = await service.getAll()
  res.json(products)
}

exports.createProduct = async (req, res) => {
  const product = await service.create(req.body)
  res.json(product)
}