import db from '../lib/db'
import { Product } from '../type/product.type'

export const getAllProducts = async (): Promise<Product[]> => {
  await db.read()
  return db.data?.products ?? []
}

export const addProduct = async (data: {
  name: string
  price: number
  stock: number
}): Promise<Product> => {
  await db.read()

  const newProduct: Product = {
    id: Date.now(),
    ...data
  }

  db.data!.products.push(newProduct)
  await db.write()

  return newProduct
}

export const modifyProduct = async (
  id: number,
  data: {
    name?: string
    price?: number
    stock?: number
  }
) => {
  await db.read()

  const product = db.data!.products.find(p => p.id === id)

  if (!product) {
    return null
  }

  Object.assign(product, data)

  await db.write()

  return product
}

export const removeProduct = async (id: number) => {
  await db.read()

  const initialLength = db.data!.products.length

  db.data!.products = db.data!.products.filter(p => p.id !== id)

  await db.write()

  return db.data!.products.length < initialLength
}