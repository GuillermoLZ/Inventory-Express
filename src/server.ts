import "dotenv/config"
import express from "express"
import productRoutes from "./routes/product.routes"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})