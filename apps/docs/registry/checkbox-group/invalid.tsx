import React from 'react'

import { Checkbox, CheckboxGroup } from 'cwl-ui'

export default function Invalid() {
  let [checked, setChecked] = React.useState<string[]>([])
  let isValid = checked.length === 1 && checked[0] === 'pizza'

  return (
    <div className="min-w-64">
      <CheckboxGroup
        label="Foods"
        description={isValid ? "What's your favorite food?" : ''}
        isInvalid={!isValid}
        errorMessage={
          checked.length > 0 && checked[0] !== 'pizza'
            ? 'Pizza is the correct answer'
            : 'You must select at least one food.'
        }
        onChange={(items) => setChecked(items)}
      >
        <Checkbox value="pizza" name="foods">
          Pizza
        </Checkbox>
        <Checkbox value="burger" name="foods">
          Burger
        </Checkbox>
        <Checkbox value="sushi" name="foods">
          Sushi
        </Checkbox>
      </CheckboxGroup>
    </div>
  )
}
