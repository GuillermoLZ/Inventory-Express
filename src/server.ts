import "dotenv/config"
import express from "express"
import productRoutes from "./routes/product.routes"
import { initDB } from './lib/db'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: true,
  credentials: true
}))
app.use(express.json())
app.use("/api/products", productRoutes)

const startServer = async () => {
  await initDB()

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  })
}

startServer()