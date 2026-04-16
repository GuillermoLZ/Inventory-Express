import { getIO } from "./socket"
import { EventEmitter } from "@shared/events/event-emitter"

export class SocketEmitter implements EventEmitter {

  emit(event: string, payload: any): void {
    const io = getIO()
    io.emit(event, payload)
  }

}