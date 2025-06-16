import mitt from "mitt"
import type { Handler } from "mitt"

export default defineNuxtPlugin(() => {
  const emitter = mitt<IEvent>()

  const listen = <Key extends keyof IEvent>(type: Key, handler: Handler<IEvent[Key]>) => {
    onMounted(() => emitter.on(type, handler))
    onBeforeUnmount(() => emitter.off(type, handler))
  }

  return {
    provide: {
      listen,
      emit: emitter.emit
    }
  }
})
