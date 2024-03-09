import { Spinner } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import ColorStory from './stories/color'
import DefaultStory from './stories/default'
import SizesStory from './stories/sizes'

const meta: Meta<typeof Spinner> = {
  title: 'Spinner',
  component: Spinner,
}

export default meta

export const Default = () => <DefaultStory />
export const Color = () => <ColorStory />
export const Sizes = () => <SizesStory />
