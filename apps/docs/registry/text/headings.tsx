import { Heading } from 'cwl-ui'

export default function HeadingDemo() {
  return (
    <div className="space-y-2">
      <Heading as="h1">Heading Level: 1</Heading>
      <Heading as="h2">Heading Level: 2</Heading>
      <Heading as="h3">Heading Level: 3</Heading>
      <Heading as="h4">Heading Level: 4</Heading>
      <Heading as="h5">Heading Level: 5</Heading>
      <Heading as="h6">Heading Level: 6</Heading>
    </div>
  )
}