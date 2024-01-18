import { Checkbox } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'
import IntermediateStory from './stories/intermediate'
import InvalidStory from './stories/invalid'

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
}

export default meta

export const Default = () => <DefaultStory />
export const Disabled = () => <DisabledStory />
export const Invalid = () => <InvalidStory />
export const Intermediate = () => <IntermediateStory />
