import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodSetEmojiStatus,
	EventEmojiStatusFailed,
	listener,
	EventEmojiStatusSet,
} from '../../../index'
import { supportCheck } from '../../../../utils'

type SetEmojiStatus = (
	eventData?: SenderData[typeof MethodSetEmojiStatus]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
}>

/**
 * Version [8.0]
 *
 * [EN]
 * Method that opens a dialog box allowing the user to set the specified custom emoji as their status.
 *
 * [RU]
 * Метод, который открывает диалоговое окно, позволяющее пользователю установить указанный пользовательский эмодзи в качестве своего статуса.
 */
const setEmojiStatus: SetEmojiStatus = async eventData => {
	if (!supportSetEmojiStatus()) {
		debug(MethodSetEmojiStatus, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		listener.once(EventEmojiStatusSet, () => resolve({ status: true }))
		listener.once(EventEmojiStatusFailed, () => resolve({ status: false }))

		sender(MethodSetEmojiStatus, eventData)
	})
}

/**
 * Method support check
 */
export const supportSetEmojiStatus = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setEmojiStatus
