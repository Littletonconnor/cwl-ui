import React from 'react'

import { Checkbox } from 'cwl-ui'

type Checked = 'false' | 'true' | 'intermediate'

export default function Intermediate() {
  let [checked, setChecked] = React.useState<Checked>('false')

  function handleOnChange() {
    if (checked === 'false') {
      setChecked('true')
    } else if (checked === 'true') {
      setChecked('intermediate')
    } else {
      setChecked('false')
    }
  }

  return (
    <div>
      <Checkbox
        isIndeterminate={checked === 'intermediate'}
        isSelected={checked === 'true'}
        onChange={handleOnChange}
        name="newsletter"
        value="subscribe"
      >
        Children
      </Checkbox>
    </div>
  )
}