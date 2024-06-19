import { Label, LabelHelperText } from 'cwl-ui'

export default function Helper() {
  return (
    <div className="flex flex-col items-start">
      <Label description="(description)">Label</Label>
      <LabelHelperText>Helper text</LabelHelperText>
    </div>
  )
}
