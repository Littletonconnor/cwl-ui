import { Badge } from 'cwl-ui'

const colors = [
  { color: 'red', text: 'bug' },
  { color: 'emerald', text: 'Documentation' },
  { color: 'fuchsia', text: 'Help wanted' },
  { color: 'zinc', text: 'Coming Soon' },
  { color: 'orange', text: 'In Progress' },
  { color: 'yellow', text: 'Review Needed' },
  { color: 'green', text: 'Completed' },
  { color: 'blue', text: 'Refactoring' },
  { color: 'indigo', text: 'Testing' },
  { color: 'purple', text: 'Deprecated' },
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
