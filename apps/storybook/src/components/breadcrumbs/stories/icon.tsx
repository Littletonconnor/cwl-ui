import { BreadcrumbItem, BreadcrumbLink, Breadcrumbs } from 'cwl-ui'
import { ChevronRight } from 'lucide-react'

export default function Icons() {
  return (
    <Breadcrumbs className="text-lg">
      <BreadcrumbItem
        separator={
          <div aria-hidden="true" className="text-slate-400">
            <ChevronRight size="0.8em" />
          </div>
        }
      >
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem
        separator={
          <div aria-hidden="true" className="text-slate-400">
            <ChevronRight size="0.8em" />
          </div>
        }
      >
        <BreadcrumbLink href="/">Account</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Settings</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  )
}
