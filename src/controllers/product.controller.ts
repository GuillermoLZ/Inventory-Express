import { Request, Response } from "express"
import { getAllProducts, addProduct, modifyProduct, removeProduct } from "../services/product.service"

export const getProducts = async (req: Request, res: Response) => {
  const products = await getAllProducts()
  res.json(products)
}

export const createProduct = async (req: Request, res: Response) => {
  const product = await addProduct(req.body)
  res.status(201).json(product)
}

// UPDATE
export const updateProduct = async (req: Request, res: Response) => {
  const updated = await modifyProduct(Number(req.params.id), req.body)
  if (!updated) return res.status(404).send('Not found')
  res.json(updated)
}

// DELETE
export const deleteProduct = async (req: Request, res: Response) => {
  const deleted = await removeProduct(Number(req.params.id))
  if (!deleted) return res.status(404).send('Not found')
  res.sendStatus(204)
}