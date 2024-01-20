import { CheckboxGroup } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import DisabledStory from './stories/disabled'
import HorizontalStory from './stories/horizontal'
import InvalidStory from './stories/invalid'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
}

export default meta

export const Default = () => <DefaultStory />
export const Horizontal = () => <HorizontalStory />
export const Invalid = () => <InvalidStory />
export const Disabled = () => <DisabledStory />
