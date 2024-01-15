import { Badge } from 'cwl-ui'

export default function Default() {
  return (
    <div className="flex space-x-2">
      <Badge color="red">bug</Badge>
      <Badge color="emerald">Documentation</Badge>
      <Badge color="fuchsia">Help wanted</Badge>
      <Badge color="zinc">Coming Soon</Badge>
    </div>
  )
}