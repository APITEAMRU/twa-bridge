import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodOpenTgLink,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'
import { TelegramIsIframe } from 'listener'

type OpenTgLink = (eventData: SenderData[typeof MethodOpenTgLink]) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [7.0]
 *
 * [EN]
 * Method that opens a Telegram link inside the Telegram app.
 * The mini-app will not be closed after calling this method.
 *
 * [RU]
 * Метод, который открывает ссылку Telegram внутри приложения Telegram.
 * Мини-приложение не будет закрыто после вызова этого метода.
 */
const openTgLink: OpenTgLink = eventData => {
	/** Requires editing on the telegram side */
	const path = createURL(eventData.path_full)
	eventData.path_full = path.pathname + path.search
	// if (eventData.path_full[0] !== '/')
	// 	eventData.path_full = '/' + eventData.path_full

	if (!supportOpenTgLink()) {
		debug(MethodOpenTgLink, 1)
		return { status: NOT_SUPPORTED }
	}

	if (TelegramIsIframe) {
		sender(MethodOpenTgLink, eventData)
	} else {
		location.href = 'https://t.me' + eventData.path_full
	}
	return { status: true }
}

/**
 * Method support check
 */
export const supportOpenTgLink = () =>
	supportCheck(7.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openTgLink

function createURL(input: string) {
	try {
		// Let's try to create the URL as is
		return new URL(input)
	} catch (e) {
		// If it doesn't work, add the base URL
		try {
			return new URL(input, 'https://t.me')
		} catch (e) {
			// If there is still an error, add / to the beginning if necessary
			if (!input.startsWith('/')) {
				input = '/' + input
			}
			return new URL(input, 'https://t.me')
		}
	}
}
