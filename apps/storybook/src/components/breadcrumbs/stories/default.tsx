import { BreadcrumbItem, BreadcrumbLink, Breadcrumbs } from 'cwl-ui'

export default function Default() {
  return (
    <Breadcrumbs className="text-lg">
      <BreadcrumbItem className="after:content-['›'] after:px-[5px] after:text-slate-400">
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem className="after:content-['›'] after:px-[5px] after:text-slate-400">
        <BreadcrumbLink href="/">Account</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem className="after:content-['›'] after:px-[5px] after:text-slate-400">
        <BreadcrumbLink href="/">Settings</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  )
}
