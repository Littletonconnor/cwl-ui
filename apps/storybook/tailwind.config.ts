import baseTailwindConfig from 'tailwind-config/tailwind.config'

const config = {
  presets: [baseTailwindConfig],
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../../packages/**/*.{js,ts,jsx,tsx}'],
}

export default config
