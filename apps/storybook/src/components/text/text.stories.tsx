import { Text as TextBase } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import AlignStory from './stories/align'
import ColorStory from './stories/color'
import DefaultStory from './stories/default'
import TextStory from './stories/text'

const meta: Meta<typeof TextBase> = {
  title: 'Text',
  component: TextBase,
}

export default meta

export const Default = () => <DefaultStory />
export const Text = () => <TextStory />
export const Align = () => <AlignStory />
export const Color = () => <ColorStory />
