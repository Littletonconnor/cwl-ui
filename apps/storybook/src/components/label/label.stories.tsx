import { Label } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'
import RequiredStory from './stories/required'

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
}

export default meta

export const Default = () => <DefaultStory />
export const Required = () => <RequiredStory />
export const Disable = () => <DisabledStory />
