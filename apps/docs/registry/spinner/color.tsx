import { Spinner } from 'cwl-ui'

export default function Default() {
  return (
    <div className="space-x-4">
      <Spinner color="primary" />
      <Spinner color="secondary" />
    </div>
  )
}