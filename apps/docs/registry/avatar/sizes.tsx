import { Avatar } from 'cwl-ui'

export default function Default() {
  return (
    <div className="space-x-4">
      <Avatar
        size="sm"
        src="https://images.unsplash.com/photo-1560800452-f2d475982b96?w=250&h=250&auto=format&fit=crop"
      />
      <Avatar
        size="md"
        src="https://images.unsplash.com/photo-1560800452-f2d475982b96?w=250&h=250&auto=format&fit=crop"
      />
      <Avatar
        size="lg"
        src="https://images.unsplash.com/photo-1560800452-f2d475982b96?w=250&h=250&auto=format&fit=crop"
      />
    </div>
  )
}