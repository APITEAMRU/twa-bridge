import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodShareToStory,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type ShareToStory = (eventData?: SenderData[typeof MethodShareToStory]) => {
	status: boolean | typeof NOT_SUPPORTED
}

const shareToStory: ShareToStory = eventData => {
	if (!supportShareToStory()) {
		debug(MethodShareToStory, 1)
		return { status: NOT_SUPPORTED }
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
