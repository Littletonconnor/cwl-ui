import { type ColorScale } from './colorScale'
import { palette } from './palette'

export type ThemeColorScale = Partial<ColorScale> | string

export type ThemeColors = {
  background: ThemeColorScale
  foreground: ThemeColorScale
  primary: ThemeColorScale
  secondary: ThemeColorScale
  surface: ThemeColorScale
  destructive: ThemeColorScale
  positive: ThemeColorScale
}

export const themeColorsLight: ThemeColors = {
  background: palette.black.DEFAULT,
  foreground: palette.gray[900],

  primary: palette.gray[900],

  secondary: {
    ...palette.gray,
    DEFAULT: palette.gray[400],
  },

  surface: {
    ...palette.gray,
    DEFAULT: palette.gray[50],
  },

  destructive: {
    ...palette.red,
    DEFAULT: palette.red[500],
  },

  positive: {
    ...palette.green,
    DEFAULT: palette.green[600],
  },
}

export const themeColorsDark: ThemeColors = {
  background: palette.gray[900],
  foreground: palette.white.DEFAULT,

  primary: {
    ...palette.purple,
    DEFAULT: palette.purple['400'],
  },

  secondary: {
    ...palette.white,
    DEFAULT: palette.white[900],
  },

  surface: {
    ...palette.white,
    DEFAULT: palette.white[100],
  },

  destructive: {
    ...palette.red,
  },

  positive: {
    ...palette.green,
  },
}

export const themeColors = {
  light: themeColorsLight,
  dark: themeColorsDark,
}
