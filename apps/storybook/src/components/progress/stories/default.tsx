import { Progress } from 'cwl-ui'

export default function Default() {
  return (
    <div>
      <Progress value={40} max={100}>
        <Progress.Indicator />
      </Progress>
    </div>
  )
}
