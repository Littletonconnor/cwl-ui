import { Heading } from 'cwl-ui'

export default function Align() {
  return (
    <div className="space-y-2">
      <Heading align="left">Left aligned</Heading>
      <Heading align="center">Center aligned</Heading>
      <Heading align="right">Right aligned</Heading>
    </div>
  )
}
