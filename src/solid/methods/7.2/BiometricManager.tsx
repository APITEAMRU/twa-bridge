import {
	debug,
	EventBiometryAuthRequested,
	EventBiometryInfoReceived,
	EventBiometryTokenUpdated,
	EventsData,
	listener,
	NOT_SUPPORTED,
	sender,
	TG_DESKTOP,
	TG_PHONE,
	TG_WEB,
} from '../../index'
import { onCleanup, onMount } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import {
	MethodBiometryGetInfo,
	MethodBiometryOpenSettings,
	MethodBiometryRequestAccess,
	MethodBiometryRequestAuth,
	MethodBiometryUpdateToken,
	SenderData,
} from '../../../types/methods'
import { supportCheck } from '../../../utils'

// listener.on(EventBiometryInfoReceived, (data) => {

// })

type Store = {
	isInited: boolean
	isBiometricAvailable: boolean
	isAccessGranted: boolean
	isAccessRequested: boolean
	isBiometricTokenSaved: boolean
	biometricType: EventsData[typeof EventBiometryInfoReceived]['type']
	deviceId: EventsData[typeof EventBiometryInfoReceived]['device_id']
}

const [store, setStore] = createStore<Store>({
	isInited: false,
	isBiometricAvailable: false,
	isAccessGranted: false,
	isAccessRequested: false,
	isBiometricTokenSaved: false,
	biometricType: 'unknown',
	deviceId: '',
})

type BiometricManager = {
	isInited: Store['isInited']
	isBiometricAvailable: Store['isBiometricAvailable']
	isAccessGranted: Store['isAccessGranted']
	isAccessRequested: Store['isAccessRequested']
	isBiometricTokenSaved: Store['isBiometricTokenSaved']
	biometricType: Store['biometricType']
	deviceId: Store['deviceId']
	init: () => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?: Store
	}>
	requestAccess: (
		eventData: SenderData[typeof MethodBiometryRequestAccess]
	) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?: Store
	}>
	authenticate: (
		eventData: SenderData[typeof MethodBiometryRequestAuth]
	) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?: EventsData[typeof EventBiometryAuthRequested]
	}>
	updateToken: (
		eventData: SenderData[typeof MethodBiometryUpdateToken]
	) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?: EventsData[typeof EventBiometryTokenUpdated]
	}>
	openSettings: (eventData: SenderData[typeof MethodBiometryOpenSettings]) => {
		status: boolean | typeof NOT_SUPPORTED
	}
}

const BiometricManager: BiometricManager = {
	isInited: store.isInited,
	isBiometricAvailable: store.isBiometricAvailable,
	isAccessGranted: store.isAccessGranted,
	isAccessRequested: store.isAccessRequested,
	isBiometricTokenSaved: store.isBiometricTokenSaved,
	biometricType: store.biometricType,
	deviceId: store.deviceId,
	init: () => {
		return new Promise((resolve, reject) => {
			if (!supportBiometricManager()) {
				debug(MethodBiometryGetInfo, 1)
				resolve({ status: NOT_SUPPORTED, data: undefined })
				return
			}

			const callback = (data: EventsData[typeof EventBiometryInfoReceived]) => {
				infoReceived(data)
				resolve({ status: true, data: store })
				listener.off(EventBiometryInfoReceived, callback)
			}
			listener.on(EventBiometryInfoReceived, callback)
			sender(MethodBiometryGetInfo)
		})
	},
	requestAccess: eventData => {
		return new Promise((resolve, reject) => {
			if (!supportBiometricManager()) {
				debug(MethodBiometryRequestAccess, 1)
				resolve({ status: NOT_SUPPORTED, data: undefined })
				return
			}
			if (eventData.reason) {
				if (eventData.reason.length > 128) {
					console.error(
						`[${MethodBiometryRequestAccess}] Biometric reason is too long`,
						eventData.reason
					)
					resolve({ status: false, data: undefined })
					return
				}
			}

			const callback = (data: EventsData[typeof EventBiometryInfoReceived]) => {
				infoReceived(data)
				resolve({ status: true, data: store })
				listener.off(EventBiometryInfoReceived, callback)
			}
			listener.on(EventBiometryInfoReceived, callback)

			sender(MethodBiometryRequestAccess, eventData)
		})
	},
	authenticate: eventData => {
		return new Promise((resolve, reject) => {
			if (!supportBiometricManager()) {
				debug(MethodBiometryRequestAuth, 1)
				resolve({ status: NOT_SUPPORTED, data: undefined })
				return
			}

			if (!store.isBiometricAvailable) {
				console.error(
					'[Telegram.WebApp] Biometrics is not available on this device.'
				)
				resolve({ status: false, data: undefined })
				return
			}
			if (!store.isAccessGranted) {
				console.error(
					'[Telegram.WebApp] Biometric access was not granted by the user.'
				)
				resolve({ status: false, data: undefined })
				return
			}
			// if (authRequestState) {
			// 	console.error(
			// 		'[Telegram.WebApp] Authentication request is already in progress.'
			// 	)
			// 	throw Error('WebAppBiometricManagerAuthenticationRequested')
			// }

			const callback = (
				data: EventsData[typeof EventBiometryAuthRequested]
			) => {
				// authRequested(data)
				resolve({ status: true, data })
				listener.off(EventBiometryAuthRequested, callback)
			}
			listener.on(EventBiometryAuthRequested, callback)
			sender(MethodBiometryRequestAuth, eventData)
		})
	},
	updateToken: eventData => {
		return new Promise((resolve, reject) => {
			if (!supportBiometricManager()) {
				debug(MethodBiometryUpdateToken, 1)
				resolve({ status: NOT_SUPPORTED, data: undefined })
				return
			}

			if (!store.isBiometricAvailable) {
				console.error(
					'[Telegram.WebApp] Biometrics is not available on this device.'
				)
				resolve({ status: false, data: undefined })
				return
			}
			if (!store.isAccessGranted) {
				console.error(
					'[Telegram.WebApp] Biometric access was not granted by the user.'
				)
				resolve({ status: false, data: undefined })
				return
			}

			const callback = (data: EventsData[typeof EventBiometryTokenUpdated]) => {
				// authRequested(data)
				resolve({ status: true, data })
				listener.off(EventBiometryTokenUpdated, callback)
			}
			listener.on(EventBiometryTokenUpdated, callback)
			sender(MethodBiometryUpdateToken, eventData)
		})
	},
	openSettings: eventData => {
		if (!supportBiometricManager()) {
			debug(MethodBiometryOpenSettings, 1)
			return { status: NOT_SUPPORTED }
		}

		if (!store.isBiometricAvailable) {
			console.error(
				'[Telegram.WebApp] Biometrics is not available on this device.'
			)
			return { status: false }
		}
		if (!store.isAccessRequested) {
			console.error(
				'[Telegram.WebApp] Biometric access was not granted by the user.'
			)
			return { status: false }
		}
		if (store.isAccessGranted) {
			console.warn(
				'[Telegram.WebApp] Biometric access was granted by the user, no need to go to settings.'
			)
			return { status: false }
		}

		sender(MethodBiometryOpenSettings, eventData)
		return { status: true }
	},
}

export default BiometricManager

/**
 * Method support check
 */
export const supportBiometricManager = () =>
	supportCheck(7.2, [TG_DESKTOP, TG_PHONE, TG_WEB])

const infoReceived = (data: EventsData[typeof EventBiometryInfoReceived]) => {
	setStore(
		produce(store => {
			if (data.available) {
				store.isBiometricAvailable = true
				store.biometricType = data.type || ''
				if (data.access_requested) {
					store.isAccessRequested = true
					store.isAccessGranted = !!data.access_granted
					store.isBiometricTokenSaved = !!data.token_saved
				} else {
					store.isAccessRequested = false
					store.isAccessGranted = false
					store.isBiometricTokenSaved = false
				}
			} else {
				store.isBiometricAvailable = false
				store.biometricType = 'unknown'
				store.isAccessRequested = false
				store.isAccessGranted = false
				store.isBiometricTokenSaved = false
			}
			store.deviceId = data.device_id || ''

			store.isInited = true

			return store
		})
	)
}

// const authRequested = (data: EventsData[typeof EventBiometryAuthRequested]) => {
// 	setStore(
// 		produce(store => {
// 			store.token = data.status === 'authorized' ? data.token || '' : ''
// 			return store
// 		})
// 	)
// }

const tokenUpdated = (data: EventsData[typeof EventBiometryTokenUpdated]) => {
	setStore(
		produce(store => {
			if (store.isBiometricAvailable && store.isAccessRequested) {
				if (data.status === 'updated') {
					store.isBiometricTokenSaved = true
				} else if (data.status === 'removed') {
					store.isBiometricTokenSaved = false
				}
			}

			return store
		})
	)
}

onMount(() => {
	listener.on(EventBiometryInfoReceived, infoReceived)
	// listener.on(EventBiometryAuthRequested, authRequested)
	listener.on(EventBiometryTokenUpdated, tokenUpdated)

	onCleanup(() => {
		listener.off(EventBiometryInfoReceived, infoReceived)
		// listener.off(EventBiometryAuthRequested, authRequested)
		listener.off(EventBiometryTokenUpdated, tokenUpdated)
	})
})
