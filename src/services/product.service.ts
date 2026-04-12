import prisma from "../lib/prisma"

export const getAllProducts = async () => {
  return await prisma.product.findMany()
}

export const addProduct = async (data: {
  name: string
  price: number
  stock: number
}) => {
  return await prisma.product.create({ data })
}