import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'cwl-ui'

export default function Links() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Access</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow href="#johndoe">
          <TableCell>John Doe</TableCell>
          <TableCell>john.doe@example.com</TableCell>
          <TableCell>Owner</TableCell>
        </TableRow>
        <TableRow href="#janesmith">
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane.smith@example.com</TableCell>
          <TableCell>Member</TableCell>
        </TableRow>
        <TableRow href="#alicejohnson">
          <TableCell>Alice Johnson</TableCell>
          <TableCell>alice.johnson@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow href="#bobwilliams">
          <TableCell>Bob Williams</TableCell>
          <TableCell>bob.williams@example.com</TableCell>
          <TableCell>Member</TableCell>
        </TableRow>
        <TableRow href="#charliebrown">
          <TableCell>Charlie Brown</TableCell>
          <TableCell>charlie.brown@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}