import { Request, Response } from "express"
import { CreateProductUseCase } from "@modules/products/application/use-cases/create-product.usecase"
import { GetProductsUseCase } from "@modules/products/application/use-cases/get-products.usecase"
import { GetProductUseCase } from "@modules/products/application/use-cases/get-product.usecase"
import { UpdateProductUseCase } from "@modules/products/application/use-cases/update-product.usecase"
import { DeleteProductUseCase } from "@modules/products/application/use-cases/delete-product.usecase"

export class ProductController {

  constructor(
    private createProduct: CreateProductUseCase,
    private getProducts: GetProductsUseCase,
    private getProduct: GetProductUseCase,
    private updateProduct: UpdateProductUseCase,
    private deleteProduct: DeleteProductUseCase
  ) {}

  create = async (req: Request, res: Response) => {

    const product = await this.createProduct.execute(req.body)

    return res.status(201).json(product)

  }

  findAll = async (req: Request, res: Response) => {

    const products = await this.getProducts.execute()

    return res.json(products)

  }

  findOne = async (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const product = await this.getProduct.execute(id)

    return res.json(product)

  }

  update = async (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const product = await this.updateProduct.execute({
      id,
      ...req.body
    })

    return res.json(product)

  }

  delete = async (req: Request, res: Response) => {

    const id = Number(req.params.id)

    await this.deleteProduct.execute(id)

    return res.status(204).send()

  }

}