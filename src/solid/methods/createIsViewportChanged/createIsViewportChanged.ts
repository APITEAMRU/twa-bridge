import { EventsData } from "listener"
import sender from "sender"
import { listener } from "solid"
import { createSignal, onCleanup, onMount } from "solid-js"


export const createIsViewportChanged = () => {
  const [viewportChanged, setViewportChanged] = createSignal<EventsData['viewport_changed']>({
    height: 0,
    is_expanded: false,
    is_state_stable: false
  })

  const callbackViewportChanged = (data: EventsData['viewport_changed']) =>
    setViewportChanged(data)

  onMount(() => {
    listener.on('viewport_changed', callbackViewportChanged)
    sender('web_app_request_viewport')
  })

  onCleanup(() => {
    listener.off('viewport_changed', callbackViewportChanged)
  })

  return viewportChanged
}

export default createIsViewportChanged