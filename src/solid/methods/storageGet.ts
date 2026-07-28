import { NOT_SUPPORTED } from '../index'

type SessionStorageGet = ({ key }: { key: string }) => {
	is_json: boolean
	status: boolean | typeof NOT_SUPPORTED
	value?: unknown
}

/**
 * sessions storage get.
 */
const sessionStorageGet: SessionStorageGet = ({ key }) => {
	// if (!supportSessionSessionGet()) { debug("sessionStorageGet", 1); return { status: NOT_SUPPORTED } }

	let value: string | null
	try {
		value = window.sessionStorage.getItem('__telegram__' + key)
	} catch (e) {
		return {
			is_json: false,
			status: false,
		}
	}

	if (value === null) {
		return {
			is_json: false,
			value: null,
			status: true,
		}
	}

	try {
		return {
			is_json: true,
			value: JSON.parse(value),
			status: true,
		}
	} catch (e) {
		return {
			is_json: false,
			value,
			status: true,
		}
	}
}

/**
 * Method support check
 */
export const supportSessionStorageGet = () => true

export default sessionStorageGet
