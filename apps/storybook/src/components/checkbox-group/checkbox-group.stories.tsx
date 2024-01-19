import { CheckboxGroup } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import InvalidStory from './stories/invalid'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
}

export default meta

export const Default = () => <DefaultStory />
export const Invalid = () => <InvalidStory />
