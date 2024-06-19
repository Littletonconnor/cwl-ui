import { Slider } from 'cwl-ui'

export default function Orientation() {
  return (
    <form className="flex gap-8">
      <Slider defaultValue={[20]} orientation="vertical" />
      <Slider defaultValue={[60]} orientation="vertical" />
      <Slider defaultValue={[80]} orientation="vertical" />
    </form>
  )
}
