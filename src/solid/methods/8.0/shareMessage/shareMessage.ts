import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodSendPreparedMessage,
	EventPreparedMessageFailed,
	listener,
	EventPreparedMessageSent,
} from '../../../index'
import { supportCheck } from '../../../../utils'

type ShareMessage = (
	eventData?: SenderData[typeof MethodSendPreparedMessage]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
}>

/**
 * Version [8.0]
 *
 * [EN]
 * Method that opens a dialog box allowing the user to share a message provided by the bot.
 * The message ID passed to this method must belong to a `PreparedInlineMessage` previously obtained using the bot API method `savePreparedInlineMessage`.
 *
 * [RU]
 * Метод, который открывает диалоговое окно, позволяющее пользователю поделиться сообщением, предоставленным ботом.
 * Идентификатор сообщения, переданный этому методу, должен принадлежать `PreparedInlineMessage`, ранее полученному с помощью метода API бота `savePreparedInlineMessage`.
 */
const shareMessage: ShareMessage = async eventData => {
	if (!supportShareMessage()) {
		debug(MethodSendPreparedMessage, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		listener.once(EventPreparedMessageSent, () => resolve({ status: true }))
		listener.once(EventPreparedMessageFailed, () => resolve({ status: false }))

		sender(MethodSendPreparedMessage, eventData)
	})
}

/**
 * Method support check
 */
export const supportShareMessage = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default shareMessage
