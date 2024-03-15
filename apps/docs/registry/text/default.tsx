import { Heading, Strong, Text } from 'cwl-ui'

export default function Default() {
  return (
    <div className="space-y-2">
      <Heading as="h1">Welcome to Our Website</Heading>
      <Text>
        We provide high-quality products and services. <Strong>Customer satisfaction</Strong> is our
        top priority.
      </Text>
      <Heading as="h2">Our Products</Heading>
      <Text>Explore our wide range of products designed to make your life easier.</Text>
    </div>
  )
}