import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodRequestFileDownload,
	listener,
	EventFileDownloadRequested,
	EventsData,
} from '../../../index'
import { supportCheck } from '../../../../utils'

type DownloadFile = (
	eventData: SenderData[typeof MethodRequestFileDownload]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
}>

/**
 * Version [8.0]
 *
 * [EN]
 * A method that displays a custom popup window prompting the user to download a file.
 *
 * [RU]
 * Метод, который отображает собственное всплывающее окно, предлагающее пользователю загрузить файл.
 */
const downloadFile: DownloadFile = async eventData => {
	if (!supportDownloadFile()) {
		debug(MethodRequestFileDownload, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		function callback(data: EventsData[typeof EventFileDownloadRequested]) {
			resolve({ status: data.status === 'downloading' })
		}
		listener.once(EventFileDownloadRequested, callback)

		sender(MethodRequestFileDownload, eventData)
	})
}

/**
 * Method support check
 */
export const supportDownloadFile = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default downloadFile
