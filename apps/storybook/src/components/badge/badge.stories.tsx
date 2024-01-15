import { Badge } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import ColorStory from './stories/colors'
import DefaultStory from './stories/default'

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
}

export default meta

export const Default = () => <DefaultStory />
export const Color = () => <ColorStory />
