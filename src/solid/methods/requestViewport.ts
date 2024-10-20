import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodRequestViewport,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type RequestViewport = (
	eventData?: SenderData[typeof MethodRequestViewport]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Requests current viewport information from Telegram.
 *
 * As a result, Telegram will create viewport_changed event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-viewport
 */
const requestViewport: RequestViewport = eventData => {
	if (!supportRequestViewport()) {
		debug(MethodRequestViewport, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodRequestViewport, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportRequestViewport = () =>
	supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestViewport
