import { Text as TextBase } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import HeadingStory from './stories/headings'
import TextStory from './stories/text'

const meta: Meta<typeof TextBase> = {
  title: 'Text',
  component: TextBase,
}

export default meta

export const Default = () => <DefaultStory />
export const Text = () => <TextStory />
export const Heading = () => <HeadingStory />
