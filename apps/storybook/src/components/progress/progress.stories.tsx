import { Progress } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'

const meta: Meta<typeof Progress> = {
  title: 'Progress',
  component: Progress,
}

export default meta

export const Default = () => <DefaultStory />
