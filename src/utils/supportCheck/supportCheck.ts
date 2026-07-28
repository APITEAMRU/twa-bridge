import { getPlatform } from '..'

export const NOT_SUPPORTED = 'not_supported'

type CheckAvailability = (
	minVersion: string | number,
	platforms: Array<'web' | 'desktop' | 'phone'>
) => boolean

const checkAvailability: CheckAvailability = (minVersion, platforms) => {
	const params = new URLSearchParams(window.location.hash.slice(1))
	const version = params.get('tgWebAppVersion')
	const [currentMajor = 0, currentMinor = 0] = (version || '0')
		.split('.')
		.map(Number)
	const [requiredMajor = 0, requiredMinor = 0] = String(minVersion)
		.split('.')
		.map(Number)

	return (
		(currentMajor > requiredMajor ||
			(currentMajor === requiredMajor && currentMinor >= requiredMinor)) &&
		platforms.indexOf(getPlatform()) !== -1
	)
}

export default checkAvailability
