import { Spinner } from 'cwl-ui'

export default function Default() {
  return (
    <div className="flex flex-wrap space-x-4">
      <Spinner size="xxs" />
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
      <Spinner size="xxl" />
    </div>
  )
}