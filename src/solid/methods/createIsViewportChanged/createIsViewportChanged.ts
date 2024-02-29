import { EventViewportChanged, EventsData, MethodRequestViewport, listener, sender } from "../../index"
import { createSignal, onCleanup, onMount } from "solid-js"


export const createIsViewportChanged = () => {
  const [viewportChanged, setViewportChanged] = createSignal<EventsData[typeof EventViewportChanged]>({
    height: 0,
    is_expanded: false,
    is_state_stable: false
  })

  const callbackViewportChanged = (data: EventsData[typeof EventViewportChanged]) =>
    setViewportChanged(data)

  onMount(() => {
    listener.on(EventViewportChanged, callbackViewportChanged)
    sender(MethodRequestViewport)
  })

  onCleanup(() => {
    listener.off(EventViewportChanged, callbackViewportChanged)
  })

  return viewportChanged
}

export default createIsViewportChanged