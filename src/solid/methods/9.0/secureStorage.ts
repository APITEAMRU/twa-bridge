import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSecureStorageSaveKey,
	MethodSecureStorageGetKey,
	MethodSecureStorageRestoreKey,
	MethodSecureStorageClear,
	SenderData,
	EventsData,
	EventSecureStorageKeySaved,
	EventSecureStorageKeyReceived,
	EventSecureStorageKeyRestored,
	EventSecureStorageCleared,
	EventSecureStorageFailed,
	listener,
} from '../../index'
import { randomReqId, supportCheck } from '../../../utils'

type SecureStorage = {
	setItem: (
		eventData: SenderData[typeof MethodSecureStorageSaveKey]
	) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?:
			| EventsData[typeof EventSecureStorageKeySaved]
			| EventsData[typeof EventSecureStorageFailed]
	}>
	getItem: (
		eventData: SenderData[typeof MethodSecureStorageGetKey]
	) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?:
			| EventsData[typeof EventSecureStorageKeyReceived]
			| EventsData[typeof EventSecureStorageFailed]
	}>
	restoreItem: (
		eventData: SenderData[typeof MethodSecureStorageRestoreKey]
	) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?:
			| EventsData[typeof EventSecureStorageKeyRestored]
			| EventsData[typeof EventSecureStorageFailed]
	}>
	removeItem: (eventData: { key: string; req_id?: string }) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?:
			| EventsData[typeof EventSecureStorageKeySaved]
			| EventsData[typeof EventSecureStorageFailed]
	}>
	clear: (
		eventData?: SenderData[typeof MethodSecureStorageClear]
	) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?:
			| EventsData[typeof EventSecureStorageCleared]
			| EventsData[typeof EventSecureStorageFailed]
	}>
}

/**
 * Version [9.0]
 *
 * Secure storage local to the current device and bot.
 */
const secureStorage: SecureStorage = {
	setItem: async eventData => {
		if (!supportSecureStorage()) {
			debug(MethodSecureStorageSaveKey, 1)
			return { status: NOT_SUPPORTED }
		}
		if (eventData.req_id === undefined) eventData.req_id = randomReqId()

		return new Promise((resolve, reject) => {
			const clear = () => {
				listener.off(EventSecureStorageKeySaved, saved)
				listener.off(EventSecureStorageFailed, failed)
			}
			const saved = (data: EventsData[typeof EventSecureStorageKeySaved]) => {
				if (data.req_id !== eventData.req_id) return
				clear()
				resolve({ status: true, data })
			}
			const failed = (data: EventsData[typeof EventSecureStorageFailed]) => {
				if (data.req_id !== eventData.req_id) return
				clear()
				resolve({ status: false, data })
			}
			listener.on(EventSecureStorageKeySaved, saved)
			listener.on(EventSecureStorageFailed, failed)
			sender(MethodSecureStorageSaveKey, eventData)
		})
	},
	getItem: async eventData => {
		if (!supportSecureStorage()) {
			debug(MethodSecureStorageGetKey, 1)
			return { status: NOT_SUPPORTED }
		}
		if (eventData.req_id === undefined) eventData.req_id = randomReqId()

		return new Promise((resolve, reject) => {
			const clear = () => {
				listener.off(EventSecureStorageKeyReceived, received)
				listener.off(EventSecureStorageFailed, failed)
			}
			const received = (
				data: EventsData[typeof EventSecureStorageKeyReceived]
			) => {
				if (data.req_id !== eventData.req_id) return
				clear()
				resolve({ status: true, data })
			}
			const failed = (data: EventsData[typeof EventSecureStorageFailed]) => {
				if (data.req_id !== eventData.req_id) return
				clear()
				resolve({ status: false, data })
			}
			listener.on(EventSecureStorageKeyReceived, received)
			listener.on(EventSecureStorageFailed, failed)
			sender(MethodSecureStorageGetKey, eventData)
		})
	},
	restoreItem: async eventData => {
		if (!supportSecureStorage()) {
			debug(MethodSecureStorageRestoreKey, 1)
			return { status: NOT_SUPPORTED }
		}
		if (eventData.req_id === undefined) eventData.req_id = randomReqId()

		return new Promise((resolve, reject) => {
			const clear = () => {
				listener.off(EventSecureStorageKeyRestored, restored)
				listener.off(EventSecureStorageFailed, failed)
			}
			const restored = (
				data: EventsData[typeof EventSecureStorageKeyRestored]
			) => {
				if (data.req_id !== eventData.req_id) return
				clear()
				resolve({ status: true, data })
			}
			const failed = (data: EventsData[typeof EventSecureStorageFailed]) => {
				if (data.req_id !== eventData.req_id) return
				clear()
				resolve({ status: false, data })
			}
			listener.on(EventSecureStorageKeyRestored, restored)
			listener.on(EventSecureStorageFailed, failed)
			sender(MethodSecureStorageRestoreKey, eventData)
		})
	},
	removeItem: async eventData => {
		return secureStorage.setItem({ ...eventData, value: null })
	},
	clear: async eventData => {
		if (!supportSecureStorage()) {
			debug(MethodSecureStorageClear, 1)
			return { status: NOT_SUPPORTED }
		}
		if (!eventData) eventData = { req_id: undefined }
		if (eventData.req_id === undefined) eventData.req_id = randomReqId()

		return new Promise((resolve, reject) => {
			const clear = () => {
				listener.off(EventSecureStorageCleared, cleared)
				listener.off(EventSecureStorageFailed, failed)
			}
			const cleared = (data: EventsData[typeof EventSecureStorageCleared]) => {
				if (data.req_id !== eventData?.req_id) return
				clear()
				resolve({ status: true, data })
			}
			const failed = (data: EventsData[typeof EventSecureStorageFailed]) => {
				if (data.req_id !== eventData?.req_id) return
				clear()
				resolve({ status: false, data })
			}
			listener.on(EventSecureStorageCleared, cleared)
			listener.on(EventSecureStorageFailed, failed)
			sender(MethodSecureStorageClear, eventData)
		})
	},
}

/**
 * Method support check
 */
export const supportSecureStorage = () =>
	supportCheck(9.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default secureStorage
