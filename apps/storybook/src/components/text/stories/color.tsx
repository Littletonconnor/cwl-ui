import { Text } from 'cwl-ui'

export default function Align() {
  return (
    <div className="flex space-x-2">
      <Text color="neutral">Neutral</Text>
      <Text color="secondary">Secondary</Text>
      <Text color="promote">Promote</Text>
      <Text color="info">Info</Text>
      <Text color="positive">Positive</Text>
      <Text color="critical">Critical</Text>
    </div>
  )
}
