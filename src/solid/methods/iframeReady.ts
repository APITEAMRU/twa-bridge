import {
	TG_WEB,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodIframeReady,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type IframeReady = (eventData: SenderData[typeof MethodIframeReady]) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Notifies parent iframe about the current frame is ready.
 * This method is only used in the Web version of Telegram.
 * As a result, Mini App will receive set_custom_style event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#iframe-ready
 */
const iframeReady: IframeReady = eventData => {
	if (!supportIframeReady()) {
		debug(MethodIframeReady, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodIframeReady, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportIframeReady = () => supportCheck(0, [TG_WEB])

export default iframeReady
