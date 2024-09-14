import {
	TG_WEB,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodIframeReady,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type IframeWillReload = (eventData: SenderData[typeof MethodIframeReady]) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Notifies parent iframe about the current iframe is going to reload.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#iframe-will-reload
 */
const iframeWillReload: IframeWillReload = () => {
	if (!supportIframeWillReload()) {
		debug(MethodIframeReady, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodIframeReady)
	return { status: true }
}

/**
 * Method support check
 */
export const supportIframeWillReload = () => supportCheck(0, [TG_WEB])

export default iframeWillReload
