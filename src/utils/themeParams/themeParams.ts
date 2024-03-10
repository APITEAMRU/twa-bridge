const parseColorToHex = (color: string) => {
  color += '';
  var match;
  if (match = /^\s*#([0-9a-f]{6})\s*$/i.exec(color)) {
    return '#' + match[1].toLowerCase();
  }
  else if (match = /^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(color)) {
    return ('#' + match[1] + match[1] + match[2] + match[2] + match[3] + match[3]).toLowerCase();
  }
  else if (match = /^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(color)) {
    var r = parseInt(match[1]), g = parseInt(match[2]), b = parseInt(match[3]);
    var rs = (r < 16 ? '0' : '') + r.toString(16);
    var gs = (g < 16 ? '0' : '') + g.toString(16);
    var bs = (b < 16 ? '0' : '') + b.toString(16);
    return '#' + rs + gs + bs;
  }
  return false;
}

const getThemeParams = (theme_params: Record<string, string>) => {
  // temp iOS fix
  if (theme_params.bg_color == '#1c1c1d' && theme_params.bg_color == theme_params.secondary_bg_color) {
    theme_params.secondary_bg_color = '#2c2c2e';
  }

  const hash = window.location.hash.slice(1)
  const params = new URLSearchParams(hash)
  const colors = JSON.parse(params.get('tgWebAppThemeParams') ?? "")

  var colorTheme: Record<string, string> = colors;
  var color;

  for (var key in theme_params) {
    if (color = parseColorToHex(theme_params[key]) && typeof color === "string") {
      colorTheme[key] = color
    }
  }
  return colorTheme
}

export default getThemeParams;
