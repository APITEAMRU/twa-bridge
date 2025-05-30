import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodRequestEmojiStatusAccess,
	listener,
	EventEmojiStatusAccessRequested,
	EventsData,
} from '../../../index'
import { supportCheck } from '../../../../utils'

type RequestEmojiStatus = (
	eventData?: SenderData[typeof MethodRequestEmojiStatusAccess]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
}>

/**
 * Version [8.0]
 *
 * [EN]
 * A method that displays a custom popup asking for permission for the bot to manage the user's emoji status.
 *
 * [RU]
 * Метод, который показывает собственное всплывающее окно, запрашивающее разрешение для бота на управление статусом эмодзи пользователя.
 */
const requestEmojiStatus: RequestEmojiStatus = async eventData => {
	if (!supportRequestEmojiStatus()) {
		debug(MethodRequestEmojiStatusAccess, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		function callback(
			data: EventsData[typeof EventEmojiStatusAccessRequested]
		) {
			resolve({ status: data.status === 'allowed' })
		}
		listener.once(EventEmojiStatusAccessRequested, callback)

		sender(MethodRequestEmojiStatusAccess, eventData)
	})
}

/**
 * Method support check
 */
export const supportRequestEmojiStatus = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestEmojiStatus
