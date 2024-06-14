import { Text } from 'cwl-ui'

export default function Align() {
  return (
    <div className="flex space-x-2">
      <Text color="primary">Primary</Text>
      <Text color="secondary">Secondary</Text>
      <Text color="positive">Positive</Text>
      <Text color="destructive">Destructive</Text>
    </div>
  )
}