import { Slider } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'
import OrientationStory from './stories/orientation'
import RangeStory from './stories/range'

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
}

export default meta

export const Default = () => <DefaultStory />
export const Orientation = () => <OrientationStory />
export const Disabled = () => <DisabledStory />
export const Range = () => <RangeStory />
