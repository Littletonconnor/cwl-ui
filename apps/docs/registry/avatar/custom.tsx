import { Avatar } from 'cwl-ui'

export default function Custom() {
  return (
    <div>
      <Avatar src="https://images.unsplash.com/photo-1560800452-f2d475982b96?w=250&h=250&auto=format&fit=crop">
        <Avatar.Notification status="yellow" className="absolute left-0 bottom-0" />
      </Avatar>
    </div>
  )
}