const express = require("express")
const app = express()

app.use(express.json())

const productRoutes = require("./routes/product.routes")

app.use("/products", productRoutes)

app.listen(3000, () => {
  console.log("server running")
})