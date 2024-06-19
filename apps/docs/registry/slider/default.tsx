import { Slider } from 'cwl-ui'

export default function Default() {
  return (
    <form className="inline-flex w-full min-w-80 max-w-[400px] flex-col">
      <Slider label="Label" description="(description)" helperText="Helper text" />
    </form>
  )
}