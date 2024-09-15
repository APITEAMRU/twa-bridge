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
	 *
	 * @deprecated This parameter may not be provided.
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
	 *
	 * @deprecated This parameter may not be provided.
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

const getThemeParams = (theme_params?: ThemeParams) => {
	const hash = window.location.hash.slice(1)
	const params = new URLSearchParams(hash)
	const colors = JSON.parse(params.get('tgWebAppThemeParams') ?? '')

	const colorTheme: ThemeParams = theme_params || colors

	for (var key of Object.keys(colorTheme)) {
		var color = parseColorToHex(colorTheme[key as 'destructive_text_color'])
		if (typeof color === 'string') {
			colorTheme[key as 'destructive_text_color'] = color
		}
	}

	// temp iOS fix
	if (
		colorTheme?.bg_color == '#1c1c1d' &&
		colorTheme?.bg_color == colorTheme?.secondary_bg_color
	) {
		colorTheme.secondary_bg_color = '#2c2c2e'
	}

	colorTheme.bottom_bar_bg_color

	return colorTheme
}

export default getThemeParams
