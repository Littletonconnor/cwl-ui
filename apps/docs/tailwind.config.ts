import { palette } from 'cwl-ui-colors'
import baseTailwindConfig from 'tailwind-config/tailwind.config'

import tailwindTypography from '@tailwindcss/typography'

import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [baseTailwindConfig],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
    './components/**/*.{js,ts,jsx,tsx}',
    './registry/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          ...palette.white,
        },
        gray: {
          ...palette.gray,
        },
        yellow: {
          ...palette.gray,
        },
        green: {
          ...palette.green,
        },
        blue: {
          ...palette.blue,
        },
        purple: {
          ...palette.purple,
        },
        orange: {
          ...palette.orange,
        },
        red: {
          ...palette.red,
        },
        pink: {
          ...palette.pink,
        },
        black: {
          ...palette.black,
        },
      },
    },
  },
  plugins: [tailwindTypography],
}

export default config
