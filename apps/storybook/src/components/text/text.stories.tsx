import { Text as TextBase } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import AlignStory from './stories/align'
import ColorStory from './stories/color'
import DefaultStory from './stories/default'
import SizesStory from './stories/sizes'
import TruncateStory from './stories/truncate'

const meta: Meta<typeof TextBase> = {
  title: 'Text',
  component: TextBase,
}

export default meta

export const Default = () => <DefaultStory />
export const Align = () => <AlignStory />
export const Color = () => <ColorStory />
export const Sizes = () => <SizesStory />
export const Truncate = () => <TruncateStory />
