import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodOpenLink,
} from '../index'
import { supportCheck } from '../../utils'

type OpenLink = (eventData: {
	/**
	 * 	URL to be opened by Telegram application. Should be a full path with https protocol.
	 */
	url: string
	/**
	 * Optional. Link will be opened in Instant View mode if possible.
	 */
	try_instant_view?: boolean
}) => {
	status: boolean | typeof NOT_SUPPORTED
}
/**
 * Opens link in the default browser.
 *
 * Mini App will not be closed.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-link
 */
const openLink: OpenLink = eventData => {
	if (!supportOpenLink()) {
		debug(MethodOpenLink, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodOpenLink, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportOpenLink = () =>
	supportCheck(6.4, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openLink
