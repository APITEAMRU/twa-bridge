import { TG_PHONE, sender, NOT_SUPPORTED, debug, MethodExpand } from '../index'
import { supportCheck } from '../../utils'

type Expand = () => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 ** EN: A method that expands the Mini App to the maximum available height.
 *
 ** RU: Метод, расширяющий мини-приложение до максимально доступной высоты.
 */
const expand: Expand = () => {
	if (!supportExpand()) {
		debug(MethodExpand, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodExpand)
	return { status: true }
}

/**
 * Method support check
 */
export const supportExpand = () => supportCheck(0, [TG_PHONE])

export default expand
