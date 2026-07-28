import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodDeviceStorageSaveKey,
	MethodDeviceStorageGetKey,
	MethodDeviceStorageClear,
	SenderData,
	EventsData,
	EventDeviceStorageKeySaved,
	EventDeviceStorageKeyReceived,
	EventDeviceStorageCleared,
	EventDeviceStorageFailed,
	listener,
} from '../../index'
import { randomReqId, supportCheck } from '../../../utils'

type DeviceStorage = {
	setItem: (
		eventData: SenderData[typeof MethodDeviceStorageSaveKey]
	) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?:
			| EventsData[typeof EventDeviceStorageKeySaved]
			| EventsData[typeof EventDeviceStorageFailed]
	}>
	getItem: (
		eventData: SenderData[typeof MethodDeviceStorageGetKey]
	) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?:
			| EventsData[typeof EventDeviceStorageKeyReceived]
			| EventsData[typeof EventDeviceStorageFailed]
	}>
	removeItem: (eventData: { key: string; req_id?: string }) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?:
			| EventsData[typeof EventDeviceStorageKeySaved]
			| EventsData[typeof EventDeviceStorageFailed]
	}>
	clear: (
		eventData?: SenderData[typeof MethodDeviceStorageClear]
	) => Promise<{
		status: boolean | typeof NOT_SUPPORTED
		data?:
			| EventsData[typeof EventDeviceStorageCleared]
			| EventsData[typeof EventDeviceStorageFailed]
	}>
}

/**
 * Version [9.0]
 *
 * Persistent storage local to the current device and bot.
 */
const deviceStorage: DeviceStorage = {
	setItem: async eventData => {
		if (!supportDeviceStorage()) {
			debug(MethodDeviceStorageSaveKey, 1)
			return { status: NOT_SUPPORTED }
		}
		if (eventData.req_id === undefined) eventData.req_id = randomReqId()

		return new Promise((resolve, reject) => {
			const clear = () => {
				listener.off(EventDeviceStorageKeySaved, saved)
				listener.off(EventDeviceStorageFailed, failed)
			}
			const saved = (data: EventsData[typeof EventDeviceStorageKeySaved]) => {
				if (data.req_id !== eventData.req_id) return
				clear()
				resolve({ status: true, data })
			}
			const failed = (data: EventsData[typeof EventDeviceStorageFailed]) => {
				if (data.req_id !== eventData.req_id) return
				clear()
				resolve({ status: false, data })
			}
			listener.on(EventDeviceStorageKeySaved, saved)
			listener.on(EventDeviceStorageFailed, failed)
			sender(MethodDeviceStorageSaveKey, eventData)
		})
	},
	getItem: async eventData => {
		if (!supportDeviceStorage()) {
			debug(MethodDeviceStorageGetKey, 1)
			return { status: NOT_SUPPORTED }
		}
		if (eventData.req_id === undefined) eventData.req_id = randomReqId()

		return new Promise((resolve, reject) => {
			const clear = () => {
				listener.off(EventDeviceStorageKeyReceived, received)
				listener.off(EventDeviceStorageFailed, failed)
			}
			const received = (
				data: EventsData[typeof EventDeviceStorageKeyReceived]
			) => {
				if (data.req_id !== eventData.req_id) return
				clear()
				resolve({ status: true, data })
			}
			const failed = (data: EventsData[typeof EventDeviceStorageFailed]) => {
				if (data.req_id !== eventData.req_id) return
				clear()
				resolve({ status: false, data })
			}
			listener.on(EventDeviceStorageKeyReceived, received)
			listener.on(EventDeviceStorageFailed, failed)
			sender(MethodDeviceStorageGetKey, eventData)
		})
	},
	removeItem: async eventData => {
		return deviceStorage.setItem({ ...eventData, value: null })
	},
	clear: async eventData => {
		if (!supportDeviceStorage()) {
			debug(MethodDeviceStorageClear, 1)
			return { status: NOT_SUPPORTED }
		}
		if (!eventData) eventData = { req_id: undefined }
		if (eventData.req_id === undefined) eventData.req_id = randomReqId()

		return new Promise((resolve, reject) => {
			const clear = () => {
				listener.off(EventDeviceStorageCleared, cleared)
				listener.off(EventDeviceStorageFailed, failed)
			}
			const cleared = (data: EventsData[typeof EventDeviceStorageCleared]) => {
				if (data.req_id !== eventData?.req_id) return
				clear()
				resolve({ status: true, data })
			}
			const failed = (data: EventsData[typeof EventDeviceStorageFailed]) => {
				if (data.req_id !== eventData?.req_id) return
				clear()
				resolve({ status: false, data })
			}
			listener.on(EventDeviceStorageCleared, cleared)
			listener.on(EventDeviceStorageFailed, failed)
			sender(MethodDeviceStorageClear, eventData)
		})
	},
}

/**
 * Method support check
 */
export const supportDeviceStorage = () =>
	supportCheck(9.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default deviceStorage
