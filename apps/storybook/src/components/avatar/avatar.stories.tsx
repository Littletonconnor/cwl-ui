import { Avatar } from 'cwl-ui'

import { type Meta } from '@storybook/react'

import DefaultStory from './stories/default'
import NotificationStory from './stories/notification'
import SizesStory from './stories/sizes'
import StatusStory from './stories/status'
import StatusAndNotificationStory from './stories/status-and-notification'

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
}

export default meta

export const Default = () => <DefaultStory />
export const Notification = () => <NotificationStory />
export const Sizes = () => <SizesStory />
export const Status = () => <StatusStory />
export const StatusAndNotification = () => <StatusAndNotificationStory />
