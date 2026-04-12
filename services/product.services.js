const prisma = require("../lib/prisma")

exports.getAll = async () => {
  return await prisma.product.findMany()
}

exports.create = async (data) => {
  return await prisma.product.create({
    data
  })
}