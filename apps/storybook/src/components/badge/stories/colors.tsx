import { Badge } from 'cwl-ui'

const colors = [
  { color: 'gray', text: 'Info' },
  { color: 'red', text: 'bug' },
  { color: 'green', text: 'Documentation' },
  { color: 'purple', text: 'Help wanted' },
  { color: 'orange', text: 'In Progress' },
] as const

export default function Colors() {
  return (
    <div className="flex space-x-2 flex-wrap">
      {colors.map(({ color, text }) => (
        <Badge key={color} color={color}>
          {text}
        </Badge>
      ))}
    </div>
  )
}
