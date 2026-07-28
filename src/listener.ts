import {
	EventAccelerometerChanged,
	EventAccelerometerFailed,
	EventAccelerometerStarted,
	EventAccelerometerStopped,
	EventContentSafeAreaChanged,
	EventFullscreenChanged,
	EventFullscreenFailed,
	EventHomeScreenAdded,
	EventDeviceOrientationChanged,
	EventDeviceOrientationFailed,
	EventDeviceOrientationStarted,
	EventDeviceOrientationStopped,
	EventDeviceStorageCleared,
	EventDeviceStorageFailed,
	EventDeviceStorageKeyReceived,
	EventDeviceStorageKeySaved,
	EventEmojiStatusAccessRequested,
	EventEmojiStatusFailed,
	EventEmojiStatusSet,
	EventFileDownloadRequested,
	EventGyroscopeChanged,
	EventGyroscopeFailed,
	EventGyroscopeStarted,
	EventGyroscopeStopped,
	EventPreparedMessageFailed,
	EventPreparedMessageSent,
	EventLocationChecked,
	EventLocationRequested,
	EventRequestedChatFailed,
	EventRequestedChatSent,
	EventSafeAreaChanged,
	EventSecureStorageCleared,
	EventSecureStorageFailed,
	EventSecureStorageKeyReceived,
	EventSecureStorageKeyRestored,
	EventSecureStorageKeySaved,
	EventSecondaryButtonPressed,
	EventThemeChanged,
	EventHomeScreenChecked,
	EventVisibilityChanged,
	EventWriteAccessRequested,
	EventBiometryInfoReceived,
	EventBiometryTokenUpdated,
	EventBiometryAuthRequested,
} from './types/events'
import { EventEmitter } from '@minsize/utils'
import { getThemeParams, ThemeParams } from './utils'

/* Types */
export type EventsData = {
	/**
	 * User clicked the Back Button.
	 */
	back_button_pressed: undefined

	/**
	 * Telegram application attempted to extract text from clipboard.
	 */
	clipboard_text_received: {
		/**
		 * Passed during the web_app_read_text_from_clipboard method invocation req_id value.
		 */
		req_id: string
		/**
		 * Optional. Data extracted from the clipboard. The returned value will have the type string only in the case, application has access to the clipboard.
		 */
		data?: string | null
	}

	/**
	 * Custom method invocation completed.
	 */
	custom_method_invoked: {
		/**
		 * Unique identifier of this invocation.
		 */
		req_id: string
		/**
		 * Optional. Method invocation successful result.
		 */
		result?: unknown
		/**
		 * 	Optional. Method invocation error code.
		 */
		error?: string
	}

	/**
	 * An invoice was closed.
	 */
	invoice_closed: {
		/**
		 * Passed during the  web_app_open_invoice  method invocation slug value.
		 */
		slug: string
		/**
		 * Invoice status. Values:
		 *
		 * paid - invoice was paid
		 *
		 * failed - invoice failed
		 *
		 * pending - invoice is currently pending
		 *
		 * cancelled - invoice was cancelled
		 */
		status: 'paid' | 'failed' | 'pending' | 'cancelled'
	}

	/**
	 * User clicked the Main Button.
	 */
	main_button_pressed: undefined

	/**
	 * Application received phone access request status.
	 */
	phone_requested: {
		/**
		 * Request status.
		 */
		status: 'sent' | 'cancelled'
	}

	/**
	 * Popup was closed.
	 */
	popup_closed: {
		/**
		 * Optional. Identifier of the clicked button.
		 *
		 * In case, the popup was closed without clicking any button, this property will be omitted.
		 */
		button_id?: string
	}

	/**
	 * Parent iframe requested current iframe reload.
	 */
	reload_iframe: undefined

	/**
	 * The QR scanner scanned some QR and extracted its content.
	 */
	qr_text_received: {
		/**
		 * Optional. Data extracted from the QR.
		 */
		data?: string
	}

	/**
	 * QR scanner was closed.
	 */
	scan_qr_popup_closed: undefined

	/**
	 * The event which is usually sent by the Telegram web application.
	 *
	 * Its payload represents <style/> tag html content, a developer could use. The stylesheet described in the payload will help the developer to stylize the app scrollbar (but he is still able to do it himself).
	 */
	set_custom_style: undefined

	/**
	 * Occurs when the Settings Button was pressed.
	 */
	settings_button_pressed: undefined

	/**
	 * Occurs whenever the theme was changed in the user's Telegram app ( including switching to night mode).
	 */
	theme_changed: {
		/**
		 * Map where the key is a theme stylesheet key and value is the corresponding color in #RRGGBB format.
		 */
		theme_params: ThemeParams // Record<string, string>
	}

	/**
	 * Occurs whenever the viewport has been changed.
	 *
	 * For example, when the user started dragging the application or called the expansion method.
	 */
	viewport_changed: {
		/**
		 * The viewport height.
		 */
		height: number
		/**
		 * Optional. The viewport width.
		 */
		width?: number
		/**
		 * Is the viewport currently expanded.
		 */
		is_expanded: boolean
		/**
		 * Is the viewport current state stable and not going to change in the next moment.
		 */
		is_state_stable: boolean
	}

	[EventHomeScreenChecked]: {
		/**
		 * Possible values for status are:
		- **unsupported** – the feature is not supported, and it is not possible to add the icon to the home screen,
 		- **unknown** – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
		- **added** – the icon has already been added to the home screen,
		- **missed** – the icon has not been added to the home screen.
		 */
		status: 'unsupported' | 'unknown' | 'added' | 'missed'
	}
	[EventHomeScreenAdded]: undefined
	[EventFullscreenChanged]: {
		is_fullscreen: boolean
	}
	[EventFullscreenFailed]: {
		error: string
	}
	[EventVisibilityChanged]: {
		is_visible: boolean
	}
	[EventSafeAreaChanged]: {
		top: number
		bottom: number
		left: number
		right: number
	}
	[EventContentSafeAreaChanged]: {
		top: number
		bottom: number
		left: number
		right: number
	}
	[EventPreparedMessageSent]: undefined
	[EventPreparedMessageFailed]: {
		error: string
	}
	[EventEmojiStatusSet]: undefined
	[EventEmojiStatusFailed]: {
		error: string
	}
	[EventEmojiStatusAccessRequested]: {
		status: 'allowed' | 'cancelled'
	}
	[EventFileDownloadRequested]: {
		status: 'downloading' | 'cancelled'
	}
	/**
	 * Application received write access request status.
	 */
	[EventWriteAccessRequested]: {
		/**
		 * Request status.
		 */
		status: 'allowed' | 'cancelled'
	}
	[EventBiometryInfoReceived]: {
		/**
		 * [EN] Shows whether biometry is available.
		 *
		 * [RU] Показывает, доступна ли биометрия.
		 */
		available: boolean
		/**
		 * [EN] Shows whether permission to use biometrics has been requested.
		 *
		 * [RU] Показывает, было ли запрошено разрешение на использование биометрии.
		 */
		access_requested: boolean
		/**
		 * [EN] Shows whether permission to use biometrics has been granted.
		 *
		 * [RU] Показывает, предоставлено ли разрешение на использование биометрии.
		 */
		access_granted: boolean
		/**
		 * [EN] A unique device identifier that can be used to match the token to the device.
		 *
		 * [RU] Уникальный идентификатор устройства, который можно использовать для сопоставления токена с устройством.
		 */
		device_id: string

		/**
		 * [EN] Show whether local secure storage contains previously saved token.
		 *
		 * [RU] Показать, содержит ли локальное защищенное хранилище ранее сохраненный токен.
		 */
		token_saved: boolean

		/**
		 * [EN] The type of biometrics currently available on the device. Possible values: `face` or `finger`.
		 *
		 * [RU] Тип биометрических данных, доступных на устройстве в данный момент. Возможные значения: `face` или `finger`.
		 */
		type: 'face' | 'finger' | 'unknown'
	}
	[EventBiometryTokenUpdated]: {
		/**
		 * [EN] Update status. Possible values: `updated` or `removed`.
		 *
		 * [RU] Статус обновления. Возможные значения: `updated` или `removed`.
		 */
		status: 'updated' | 'removed'
	}
	[EventBiometryAuthRequested]:
		| {
				/**
				 * [EN] Authentication status. Possible values: `failed` or `authorized`.
				 *
				 * [RU] Статус аутентификации. Возможные значения: `failed` или `authorized`.
				 */
				status: 'failed'
				/**
				 * [EN] Token from the local secure storage saved previously. Passed only if status is `authorized`.
				 *
				 * [RU] Токен из локального защищённого хранилища, сохранённый ранее. Передаётся только при наличии статуса `authorized`.
				 */
				token: undefined
		  }
		| {
				/**
				 * [EN] Authentication status. Possible values: `failed` or `authorized`.
				 *
				 * [RU] Статус аутентификации. Возможные значения: `failed` или `authorized`.
				 */
				status: 'authorized'
				/**
				 * [EN] Token from the local secure storage saved previously. Passed only if status is `authorized`.
				 *
				 * [RU] Токен из локального защищённого хранилища, сохранённый ранее. Передаётся только при наличии статуса `authorized`.
				 */
				token: string
		  }
	[EventLocationChecked]: {
		available: boolean
		access_requested: boolean
		access_granted: boolean
	}
	[EventLocationRequested]:
		| {
				available: false
		  }
		| {
				available: true
				latitude: number
				longitude: number
				altitude?: number | null
				course?: number | null
				speed?: number | null
				horizontal_accuracy?: number | null
				vertical_accuracy?: number | null
				course_accuracy?: number | null
				speed_accuracy?: number | null
		  }
	[EventAccelerometerStarted]: undefined
	[EventAccelerometerStopped]: undefined
	[EventAccelerometerChanged]: {
		x: number
		y: number
		z: number
	}
	[EventAccelerometerFailed]: {
		error: string
	}
	[EventDeviceOrientationStarted]: undefined
	[EventDeviceOrientationStopped]: undefined
	[EventDeviceOrientationChanged]: {
		absolute: boolean
		alpha: number
		beta: number
		gamma: number
	}
	[EventDeviceOrientationFailed]: {
		error: string
	}
	[EventGyroscopeStarted]: undefined
	[EventGyroscopeStopped]: undefined
	[EventGyroscopeChanged]: {
		x: number
		y: number
		z: number
	}
	[EventGyroscopeFailed]: {
		error: string
	}
	[EventSecondaryButtonPressed]: undefined
	[EventDeviceStorageKeySaved]: {
		req_id: string
	}
	[EventDeviceStorageKeyReceived]: {
		req_id: string
		value: string | null
	}
	[EventDeviceStorageCleared]: {
		req_id: string
	}
	[EventDeviceStorageFailed]: {
		req_id: string
		error: string
	}
	[EventSecureStorageKeySaved]: {
		req_id: string
	}
	[EventSecureStorageKeyReceived]: {
		req_id: string
		value: string | null
		can_restore?: boolean
	}
	[EventSecureStorageKeyRestored]: {
		req_id: string
		value: string
	}
	[EventSecureStorageCleared]: {
		req_id: string
	}
	[EventSecureStorageFailed]: {
		req_id: string
		error: string
	}
	[EventRequestedChatSent]: undefined
	[EventRequestedChatFailed]: {
		error: string
	}
}

type EmitterEvents = {
	[E in keyof EventsData]: [EventsData[E]]
} & {
	'*': [{ name: keyof EventsData; data: EventsData[keyof EventsData] }]
}

const emitter = new EventEmitter<EmitterEvents>()

interface TelegramGameProxy {
	receiveEvent: (event: string, data: string) => void
}

interface TelegramWebviewProxy {
	postEvent: (event: string, data: string) => void
}
declare global {
	interface External {
		notify: (event: string) => void
	}
	interface Window {
		TelegramWebviewProxy: TelegramWebviewProxy
		TelegramGameProxy: TelegramGameProxy
		TelegramGameProxy_receiveEvent: TelegramGameProxy['receiveEvent']
		Telegram: {
			WebView: TelegramGameProxy
		}
	}
}

/**
 * Start listener
 */
const start = () => {
	/** Windows Phone */
	window.TelegramGameProxy_receiveEvent = receiveEvent

	/** Android */
	window.Telegram = window.Telegram || { WebView: { receiveEvent } }
	window.Telegram.WebView = window.Telegram.WebView || { receiveEvent }
	window.Telegram.WebView.receiveEvent = receiveEvent

	/** iOS and Desktop */
	window.TelegramGameProxy = { receiveEvent }

	function receiveEvent(eventName: string, eventData: unknown) {
		/* Fix colors */
		if (eventName === EventThemeChanged && eventData && typeof eventData === 'object') {
			const data = eventData as EventsData[typeof EventThemeChanged]
			data.theme_params = getThemeParams(data.theme_params)
		}

		const name = eventName as keyof EventsData
		const data = eventData as EventsData[keyof EventsData]
		if (emitter.e[name]?.length) {
			emitter.emit(name, data as never)
		}
		if (emitter.e['*']?.length) {
			emitter.emit('*', { name, data })
		}
	}
}

start()

type Listened = <E extends keyof EventsData>(
	eventName: E,
	callback: (eventData: EventsData[E]) => void
) => void

export const on: Listened = (eventName, callback) => {
	emitter.on(
		eventName,
		callback as unknown as (...args: EmitterEvents[typeof eventName]) => void
	)
}

export const off: Listened = (eventName, callback) => {
	emitter.off(
		eventName,
		callback as unknown as (...args: EmitterEvents[typeof eventName]) => void
	)
}

export const once: Listened = (eventName, callback) => {
	emitter.once(
		eventName,
		callback as unknown as (...args: EmitterEvents[typeof eventName]) => void
	)
}
