import { Table } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import BleedStory from './stories/bleed'
import DefaultStory from './stories/default'
import DenseStory from './stories/dense'
import GridStory from './stories/grid'
import LinkStory from './stories/links'
import OverflowStory from './stories/overflow'
import StripedStory from './stories/striped'
import StripedLinkStory from './stories/striped-links'

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
}

export default meta

export const Default = () => <DefaultStory />
export const Bleed = () => <BleedStory />
export const Dense = () => <DenseStory />
export const Grid = () => <GridStory />
export const Link = () => <LinkStory />
export const Overflow = () => <OverflowStory />
export const Striped = () => <StripedStory />
export const StripedLink = () => <StripedLinkStory />
