import { NOT_SUPPORTED, debug } from '../index'

type SessionStorageGet = ({ key }: { key: string }) => {
	is_json: boolean
	status: boolean | typeof NOT_SUPPORTED
	value?: any
}

/**
 * sessions storage get.
 */
const sessionStorageGet: SessionStorageGet = ({ key }) => {
	// if (!supportSessionSessionGet()) { debug("sessionStorageGet", 1); return { status: NOT_SUPPORTED } }

	try {
		return {
			is_json: true,
			value: JSON.parse(
				window.sessionStorage.getItem('__telegram__' + key) ?? ''
			),
			status: true,
		}
	} catch (e) {
		return {
			is_json: false,
			value: window.sessionStorage.getItem('__telegram__' + key) ?? '',
			status: true,
		}
	}
}

/**
 * Method support check
 */
export const supportSessionStorageGet = () => true

export default sessionStorageGet
