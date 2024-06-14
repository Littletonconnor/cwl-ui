import { Heading } from 'cwl-ui'

export default function Align() {
  return (
    <div className="flex space-x-2">
      <Heading color="primary">Primary</Heading>
      <Heading color="secondary">Secondary</Heading>
      <Heading color="positive">Positive</Heading>
      <Heading color="destructive">Destructive</Heading>
    </div>
  )
}