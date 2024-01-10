import { BreadcrumbItem, Breadcrumbs } from 'cwl-ui'

export default function Default() {
  return (
    <Breadcrumbs className="text-lg">
      <BreadcrumbItem className="after:content-['›'] after:px-[5px] after:text-slate-400">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem className="after:content-['›'] after:px-[5px] after:text-slate-400">
        React Aria
      </BreadcrumbItem>
      <BreadcrumbItem>useBreadcrumbs</BreadcrumbItem>
    </Breadcrumbs>
  )
}