import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	EventsData,
	listener,
	MethodReadTextFromClipboard,
	EventClipboardTextReceived,
	SenderData,
} from '../../index'
import { randomReqId, supportCheck } from '../../../utils'

type ReadTextFromClipboard = (
	eventData?: SenderData[typeof MethodReadTextFromClipboard]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
	data?: EventsData[typeof EventClipboardTextReceived]
}>

/**
 * Reads text from the clipboard.
 *
 * The method accepts a request identifier which is used to appropriately retrieve the method execution result from the clipboard_text_received event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-read-text-from-clipboard
 */

const readTextFromClipboard: ReadTextFromClipboard = async eventData => {
	if (!supportReadTextFromClipboard()) {
		debug(MethodReadTextFromClipboard, 1)
		return { status: NOT_SUPPORTED }
	}
	if (!eventData) eventData = { req_id: undefined }
	if (eventData.req_id === undefined) eventData.req_id = randomReqId()

	sender(MethodReadTextFromClipboard, eventData)
	return new Promise((resolve, reject) => {
		const callback = (data: EventsData[typeof EventClipboardTextReceived]) => {
			if (data.req_id === eventData?.req_id) {
				resolve({ status: true, data: data })
				listener.off(EventClipboardTextReceived, callback)
			}
		}
		listener.on(EventClipboardTextReceived, callback)
	})
}

/**
 * Method support check
 */
export const supportReadTextFromClipboard = () =>
	supportCheck(6.4, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default readTextFromClipboard
