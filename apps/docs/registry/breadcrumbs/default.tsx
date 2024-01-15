import { BreadcrumbItem, BreadcrumbLink, Breadcrumbs } from 'cwl-ui'

export default function Default() {
  return (
    <Breadcrumbs className="text-lg">
      <BreadcrumbItem className="after:content-['›'] after:px-[5px] after:text-muted">
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem className="after:content-['›'] after:px-[5px] after:text-muted">
        <BreadcrumbLink href="/">Account</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Settings</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  )
}