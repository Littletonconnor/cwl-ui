import * as React from 'react'

import { Slider } from 'cwl-ui'

export default function Disabled() {
  const [value, setValue] = React.useState([2500, 5000])

  return (
    <div className="inline-flex w-full min-w-80 max-w-[400px] flex-col">
      <Slider
        defaultValue={[2500, 5000]}
        label="Price Range"
        leadingAccessory="$2,500"
        trailingAccessory="$10,000"
        onValueChange={(val) => setValue(val)}
        min={1000}
        max={10000}
        helperText={
          'Selected range: $' +
          value[0]?.toLocaleString('en-us') +
          ' - $' +
          value[1]?.toLocaleString('en-us')
        }
        step={100}
      />
    </div>
  )
}