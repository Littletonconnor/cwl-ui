import { BreadcrumbItem, Breadcrumbs } from 'cwl-ui'

export default function Default() {
  return (
    <Breadcrumbs className="text-lg">
      <BreadcrumbItem className="after:content-['›'] after:px-[5px] after:text-slate-400">
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem className="after:content-['›'] after:px-[5px] after:text-slate-400">
        <a href="#">React Aria</a>
      </BreadcrumbItem>
      <BreadcrumbItem>useBreadcrumbs</BreadcrumbItem>
    </Breadcrumbs>
  )
}