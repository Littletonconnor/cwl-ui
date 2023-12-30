import { BreadcrumbItem, Breadcrumbs } from 'cwl-ui'
import { ChevronRight } from 'lucide-react'

export default function Icons() {
  return (
    <Breadcrumbs className="text-lg">
      <BreadcrumbItem
        separator={
          <div aria-hidden="true" className="text-slate-400">
            <ChevronRight size="1em" />
          </div>
        }
      >
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem
        separator={
          <div aria-hidden="true" className="text-slate-400">
            <ChevronRight size="1em" />
          </div>
        }
      >
        <a href="#">React Aria</a>
      </BreadcrumbItem>
      <BreadcrumbItem>useBreadcrumbs</BreadcrumbItem>
    </Breadcrumbs>
  )
}