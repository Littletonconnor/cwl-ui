import { Breadcrumbs } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import IconStory from './stories/icon'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
}

export default meta

export const Default = () => <DefaultStory />
export const Icon = () => <IconStory />
