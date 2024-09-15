const getAppData = (): string | null => {
	const hashParams = window.location.hash.slice(1)
	const initDataRaw = new URLSearchParams(hashParams).get('tgWebAppData')

	return initDataRaw
}

export default getAppData
