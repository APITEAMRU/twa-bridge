import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodOpenPopup,
	EventsData,
	EventPopupClosed,
	listener,
	type SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type OpenPopup = (eventData: SenderData[typeof MethodOpenPopup]) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
	data?: EventsData['popup_closed']
}>

/**
 * Opens a new popup. When user closes the popup, Telegram creates the popup_closed event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-popup
 */
const openPopup: OpenPopup = async eventData => {
	if (!supportOpenPopup()) {
		debug(MethodOpenPopup, 1)
		return { status: NOT_SUPPORTED }
	}

	if (eventData.title.length > 64) {
		debug(MethodOpenPopup, 3)
	}

	if (eventData.message.length < 1) {
		debug(MethodOpenPopup, 4)
	}
	if (eventData.message.length > 256) {
		debug(MethodOpenPopup, 5)
	}

	if (eventData.buttons.length < 1) {
		debug(MethodOpenPopup, 6)
	}
	if (eventData.buttons.length > 3) {
		debug(MethodOpenPopup, 7)
	}
	if (
		eventData.buttons.find(x => x.text?.match(/^(ok|close|cancel)$/g)) !==
		undefined
	) {
		debug(MethodOpenPopup, 8)
	}

	sender(MethodOpenPopup, eventData)
	return new Promise((resolve, reject) => {
		const callback = (data: EventsData[typeof EventPopupClosed]) => {
			resolve({
				status: !!eventData.buttons.find(x => x.id === data?.button_id),
				data: data,
			})
			listener.off(EventPopupClosed, callback)
		}
		listener.on(EventPopupClosed, callback)
	})
}

/**
 * Method support check
 */
export const supportOpenPopup = () =>
	supportCheck(6.2, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openPopup
