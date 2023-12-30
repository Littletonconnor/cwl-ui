import { BreadcrumbItem, Breadcrumbs } from 'cwl-ui'
import { ChevronRight } from 'lucide-react'

import { type Meta } from '@storybook/react'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
}

export default meta

export const Default = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem separator={<ChevronRight size="1em" />}>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem separator={<ChevronRight size="1em" />}>
        <a href="#">React Aria</a>
      </BreadcrumbItem>
      <BreadcrumbItem>useBreadcrumbs</BreadcrumbItem>
    </Breadcrumbs>
  )
}
