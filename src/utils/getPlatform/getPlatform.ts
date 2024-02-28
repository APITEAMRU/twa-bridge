
type GetPlatform = () => 'phone' | 'web' | 'desktop'

export const TG_WEB = 'web' 
export const TG_PHONE = 'phone' 
export const TG_DESKTOP = 'desktop' 

const getPlatform: GetPlatform = () => {
  const hash = window.location.hash.slice(1)
  const params = new URLSearchParams(hash)
  const platform = params.get('tgWebAppPlatform') ?? 'ios'
  if (['android', 'ios'].includes(platform)) return TG_PHONE
  if (['tdesktop', 'macos'].includes(platform)) return TG_DESKTOP

  return TG_WEB
}

export default getPlatform