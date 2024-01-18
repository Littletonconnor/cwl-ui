import { Checkbox } from 'cwl-ui'

export default function Disabled() {
  return (
    <div>
      <Checkbox isDisabled name="newsletter" value="subscribe">
        Children
      </Checkbox>
    </div>
  )
}
