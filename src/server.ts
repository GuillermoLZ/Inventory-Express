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
app.use((req, res, next) => {
  console.log('Origin:', req.headers.origin);
  next();
});
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))
app.options('*', cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// app.use(cors())
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
//   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

//   if (req.method === 'OPTIONS') {
//     return res.sendStatus(204) // 🔥 CLAVE
//   }

//   next()
// })

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
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})