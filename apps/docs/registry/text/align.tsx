import { Text } from 'cwl-ui'

export default function Align() {
  return (
    <div className="space-y-2">
      <Text align="left">Left aligned</Text>
      <Text align="center">Center aligned</Text>
      <Text align="right">Right aligned</Text>
    </div>
  )
}