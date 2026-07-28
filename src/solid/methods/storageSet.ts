import { NOT_SUPPORTED } from '../index'

type SessionStorageSet = ({ key, value }: { key: string; value: unknown }) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * sessions storage set.
 */
const sessionStorageSet: SessionStorageSet = ({ key, value }) => {
	// if (!supportSessionStorageSet()) { debug("sessionStorageSet", 1); return { status: NOT_SUPPORTED } }

	let storageValue: string
	try {
		storageValue = JSON.stringify(value) ?? String(value)
	} catch (e) {
		try {
			storageValue = String(value)
		} catch (e) {
			return { status: false }
		}
	}

	try {
		window.sessionStorage.setItem('__telegram__' + key, storageValue)
		return { status: true }
	} catch (e) {
		return { status: false }
	}
}

/**
 * Method support check
 */
export const supportSessionStorageSet = () => true

export default sessionStorageSet
