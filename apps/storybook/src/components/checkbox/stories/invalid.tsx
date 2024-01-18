import { Checkbox } from 'cwl-ui'

export default function Invalid() {
  return (
    <div>
      <Checkbox isInvalid name="newsletter" value="subscribe">
        Children
      </Checkbox>
    </div>
  )
}
