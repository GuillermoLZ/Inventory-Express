export interface EventEmitter {
  emit(event: string, payload: any): void
}