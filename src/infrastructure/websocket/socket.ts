import { Server } from "socket.io"

let io: Server

export const initSocket = (server: any) => {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  })

  io.on("connection", (socket) => {
    console.log("Cliente conectado:", socket.id)
  })

  return io
}

export const getIO = () => {
  if (!io) throw new Error("Socket no inicializado")
  return io
}