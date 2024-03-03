import tailwindAnimate from 'tailwindcss-animate'
import tailwindReactAriaComponents from 'tailwindcss-react-aria-components'

import { type Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [],
  plugins: [tailwindAnimate, tailwindReactAriaComponents],
}

export default config
