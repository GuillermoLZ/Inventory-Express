import { Prisma } from "@prisma/client"
import prisma from "../lib/prisma"

export const getAllProducts = async () => {
  return await prisma.product.findMany()
}

export const addProduct = async (data: Prisma.ProductCreateInput) => {
  return await prisma.product.create({ data })
}