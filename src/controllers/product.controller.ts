import { Request, Response } from "express"
import { getAllProducts, addProduct } from "../services/product.service"

export const getProducts = async (req: Request, res: Response) => {
  const products = await getAllProducts()
  res.json(products)
}

export const createProduct = async (req: Request, res: Response) => {
  const product = await addProduct(req.body)
  res.status(201).json(product)
}