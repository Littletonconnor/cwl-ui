import { Badge, colors } from 'cwl-ui'

export default function ColorReference() {
  return (
    <table className="typography w-full">
      <thead>
        <tr>
          <th className="w-1/2" align="left">
            Color
          </th>
          <th className="w-2/3" align="left">
            Example
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(colors).map((color) => (
          <tr key={color} className="[&>*]:first:pt-6 [&>*]:last:pb-6">
            <td align="left" className="w-1/2">
              <code>{color}</code>
            </td>
            <td align="left" className="w-2/3">
              <Badge color={color as any}>{color}</Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
