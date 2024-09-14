const parseColorToHex = (color: string) => {
	color += ''
	var match
	if ((match = /^\s*#([0-9a-f]{6})\s*$/i.exec(color))) {
		return '#' + match[1].toLowerCase()
	} else if ((match = /^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(color))) {
		return (
			'#' +
			match[1] +
			match[1] +
			match[2] +
			match[2] +
			match[3] +
			match[3]
		).toLowerCase()
	} else if (
		(match =
			/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(
				color
			))
	) {
		var r = parseInt(match[1]),
			g = parseInt(match[2]),
			b = parseInt(match[3])
		var rs = (r < 16 ? '0' : '') + r.toString(16)
		var gs = (g < 16 ? '0' : '') + g.toString(16)
		var bs = (b < 16 ? '0' : '') + b.toString(16)
		return '#' + rs + gs + bs
	}
	return false
}

export type ThemeParams = {
	bg_color: string
	text_color: string
	hint_color: string
	link_color: string
	button_color: string
	button_text_color: string
	/**
	 * Bot API 6.1+
	 */
	secondary_bg_color: string
	/**
	 * Bot API 7.0+
	 */
	header_bg_color: string
	/**
	 * Bot API 7.10+
	 */
	bottom_bar_bg_color: string
	/**
	 * Bot API 7.0+
	 */
	accent_text_color: string
	/**
	 * Bot API 7.0+
	 */
	section_bg_color: string
	/**
	 * Bot API 7.0+
	 */
	section_header_text_color: string
	/**
	 * Bot API 7.6+
	 */
	section_separator_color: string
	/**
	 * Bot API 7.0+
	 */
	subtitle_text_color: string
	/**
	 * Bot API 7.0+
	 */
	destructive_text_color: string
}

const getThemeParams = (theme_params: ThemeParams) => {
	// temp iOS fix
	if (
		theme_params.bg_color == '#1c1c1d' &&
		theme_params.bg_color == theme_params.secondary_bg_color
	) {
		theme_params.secondary_bg_color = '#2c2c2e'
	}

	const hash = window.location.hash.slice(1)
	const params = new URLSearchParams(hash)
	const colors = JSON.parse(params.get('tgWebAppThemeParams') ?? '')

	var colorTheme: Record<string, string> = colors

	for (var key of Object.keys(theme_params)) {
		var color = parseColorToHex(theme_params[key as 'destructive_text_color'])
		if (typeof color === 'string') {
			colorTheme[key] = color
		}
	}
	return colorTheme
}

export default getThemeParams
