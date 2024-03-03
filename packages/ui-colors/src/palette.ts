import { black } from './black'
import { blue } from './blue'
import { gray } from './gray'
import { green } from './green'
import { orange } from './orange'
import { pink } from './pink'
import { purple } from './purple'
import { red } from './red'
import { white } from './white'
import { yellow } from './yellow'

export const palette = {
  white,
  blue,
  gray,
  green,
  orange,
  pink,
  purple,
  red,
  yellow,
  black,
} as const

export type Palette = typeof palette
export type PaletteKeys = keyof Palette
