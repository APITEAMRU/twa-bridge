import {
	EventsData,
	listener,
	EventViewportChanged,
	bridgeRequestViewport,
	EventThemeChanged,
	GetInitData,
	bridgeGetInitData,
} from '../../index'
import {
	type JSX,
	type Component,
	createContext,
	onCleanup,
	Context,
	createEffect,
} from 'solid-js'
import { createStore } from 'solid-js/store'

type Value = {
	viewport?: EventsData[typeof EventViewportChanged]
	theme?: EventsData[typeof EventThemeChanged]
	init?: GetInitData
}

export const ContextTwa = createContext({
	viewport: undefined,
	theme: undefined,
	init: undefined,
}) as Context<Value>

interface ProviderTWA extends JSX.HTMLAttributes<HTMLDivElement> {}

const ProviderTWA: Component<ProviderTWA> = props => {
	const [store, setStore] = createStore<Value>({
		viewport: undefined,
		theme: undefined,
		init: undefined,
	})

	createEffect(() => {
		const onInitData = () => {
			setStore('init', bridgeGetInitData())
		}
		onInitData()

		const onRequestViewport = (
			eventData: EventsData[typeof EventViewportChanged]
		) => {
			onInitData()
			setStore('viewport', eventData)
		}

		listener.on(EventViewportChanged, onRequestViewport)
		bridgeRequestViewport()

		const onThemeChanged = (
			eventData: EventsData[typeof EventThemeChanged]
		) => {
			onInitData()
			setStore('theme', eventData)
		}

		listener.on(EventThemeChanged, onThemeChanged)
		bridgeRequestViewport()

		onCleanup(() => {
			listener.off(EventViewportChanged, onRequestViewport)
			listener.off(EventThemeChanged, onThemeChanged)
		})

		return () => {
			listener.off(EventViewportChanged, onRequestViewport)
			listener.off(EventThemeChanged, onThemeChanged)
		}
		props.children
	})

	return ContextTwa.Provider({ value: store, children: props.children })
}

export default ProviderTWA
