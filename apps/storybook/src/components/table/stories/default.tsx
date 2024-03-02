import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'cwl-ui'

export default function Default() {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Access</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john.doe@example.com</TableCell>
            <TableCell>Owner</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane.smith@example.com</TableCell>
            <TableCell>Member</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Alice Johnson</TableCell>
            <TableCell>alice.johnson@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Williams</TableCell>
            <TableCell>bob.williams@example.com</TableCell>
            <TableCell>Member</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Charlie Brown</TableCell>
            <TableCell>charlie.brown@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
