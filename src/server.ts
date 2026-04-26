import "dotenv/config"
import express from "express"
import http from "http"
import { initSocket } from "@infrastructure/websocket/socket"
import productRoutes from "./modules/products/presentation/routes/product.routes"
import authRoutes from "./modules/auth/presentation/routes/auth.routes"
import userRoutes from "./modules/users/presentation/routes/user.routes"
import { errorMiddleware } from "@shared/middlewares/error.middleware"
import { httpLogger } from "@shared/middlewares/http-logger.middleware"
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

const corsConfig = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // si usas cookies/tokens
};

app.use(cors(corsConfig));
app.options('*', cors(corsConfig)); // preflight global

app.use(httpLogger)
app.use(express.json())

// Routes
app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.use(errorMiddleware)

// Config sockets
const server = http.createServer(app)
initSocket(server)

// Listen Server
server.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})