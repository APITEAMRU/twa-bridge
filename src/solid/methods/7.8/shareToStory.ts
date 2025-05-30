import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodShareToStory,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'

type ShareToStory = (eventData?: SenderData[typeof MethodShareToStory]) => {
	status: boolean | typeof NOT_SUPPORTED
	error_id?: number
}
/**
 * Version 7.8
 *
 *  [EN]
 * Method that opens a custom story editor with media specified in the media_url parameter as an HTTPS URL.
 *
 * [RU]
 * Метод, который открывает собственный редактор историй с медиа, указанными в параметре media_url как HTTPS URL.
 */
const shareToStory: ShareToStory = eventData => {
	if (!supportShareToStory()) {
		debug(MethodShareToStory, 1)
		return { status: NOT_SUPPORTED }
	}

	if (eventData?.text && eventData?.text.length > 2048) {
		console.warn(
			`[@apiteam/twa-bridge](${MethodShareToStory}) | Text is too long`
		)
		return { status: false, error_id: 1 }
	}

	if (eventData?.widget_link?.name && eventData?.widget_link.name.length > 48) {
		console.warn(
			`[@apiteam/twa-bridge](${MethodShareToStory}) | Link name is too long`
		)
		return { status: false, error_id: 2 }
	}

	sender(MethodShareToStory, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportShareToStory = () =>
	supportCheck(7.8, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default shareToStory
