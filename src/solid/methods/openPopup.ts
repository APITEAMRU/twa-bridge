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

	if (eventData.title && eventData.title.length > 64) {
		debug(MethodOpenPopup, 3)
	}

	if (eventData.message.length < 1) {
		debug(MethodOpenPopup, 4)
	}
	if (eventData.message.length > 256) {
		debug(MethodOpenPopup, 5)
	}

	if (eventData.buttons) {
		if (eventData.buttons.length < 1) {
			debug(MethodOpenPopup, 6)
		}
		if (eventData.buttons.length > 3) {
			debug(MethodOpenPopup, 7)
		}
		for (const button of eventData.buttons) {
			if (button.id && button.id.length > 64) {
				debug(MethodOpenPopup, 8)
			}
			if (
				(button.type === undefined ||
					button.type === 'default' ||
					button.type === 'destructive') &&
				(!button.text || button.text.length > 64)
			) {
				debug(MethodOpenPopup, 8)
			}
		}
	}

	return new Promise((resolve, reject) => {
		const buttons = eventData.buttons || [{ id: '', type: 'close' as const }]
		const callback = (data: EventsData[typeof EventPopupClosed]) => {
			resolve({
				status: buttons.some(x => (x.id || '') === (data?.button_id || '')),
				data: data,
			})
			listener.off(EventPopupClosed, callback)
		}
		listener.on(EventPopupClosed, callback)
		sender(MethodOpenPopup, eventData)
	})
}

/**
 * Method support check
 */
export const supportOpenPopup = () =>
	supportCheck(6.2, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openPopup
