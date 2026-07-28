import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodRequestChat,
	SenderData,
	EventsData,
	EventRequestedChatSent,
	EventRequestedChatFailed,
	listener,
} from '../../index'
import { supportCheck } from '../../../utils'

type RequestChat = (
	eventData: SenderData[typeof MethodRequestChat]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
	data?: EventsData[typeof EventRequestedChatFailed]
}>

/**
 * Version [9.6]
 *
 * Opens the chat selection flow configured by the bot.
 */
const requestChat: RequestChat = async eventData => {
	if (!supportRequestChat()) {
		debug(MethodRequestChat, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		const clear = () => {
			listener.off(EventRequestedChatSent, sent)
			listener.off(EventRequestedChatFailed, failed)
		}
		const sent = () => {
			clear()
			resolve({ status: true })
		}
		const failed = (data: EventsData[typeof EventRequestedChatFailed]) => {
			clear()
			resolve({ status: false, data })
		}
		listener.on(EventRequestedChatSent, sent)
		listener.on(EventRequestedChatFailed, failed)
		sender(MethodRequestChat, eventData)
	})
}

/**
 * Method support check
 */
export const supportRequestChat = () =>
	supportCheck(9.6, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestChat
