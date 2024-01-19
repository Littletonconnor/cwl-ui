import { Checkbox, CheckboxGroup } from 'cwl-ui'

export default function Default() {
  return (
    <div>
      <CheckboxGroup label="Foods" description="What's your favorite food?">
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
