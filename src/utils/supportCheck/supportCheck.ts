import { getPlatform } from ".."

export const NOT_SUPPORTED = 'not_supported'

type CheckAvailability = (minVersion: number, platforms: Array<'web' | 'desktop' | 'phone'>) => boolean

const checkAvailability: CheckAvailability = (minVersion, platforms) => {
  const params = new URLSearchParams(window.location.hash.slice(1))
  const version = params.get('tgWebAppVersion')

  return Number(version) >= minVersion && platforms.indexOf(getPlatform()) !== -1
}

export default checkAvailability