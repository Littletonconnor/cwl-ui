import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'cwl-ui'

export default function Overflow() {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Handle</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Access</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>@johndoe</TableCell>
            <TableCell>Co-Founder / CEO</TableCell>
            <TableCell>john.doe@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>@janesmith</TableCell>
            <TableCell>Co-Founder / CTO</TableCell>
            <TableCell>jane.smith@example.com</TableCell>
            <TableCell>Owner</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Alice Johnson</TableCell>
            <TableCell>@alicejohnson</TableCell>
            <TableCell>Business Relations</TableCell>
            <TableCell>alice.johnson@example.com</TableCell>
            <TableCell>Member</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Williams</TableCell>
            <TableCell>@bobwilliams</TableCell>
            <TableCell>Front-end Developer</TableCell>
            <TableCell>bob.williams@example.com</TableCell>
            <TableCell>Member</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Charlie Brown</TableCell>
            <TableCell>@charliebrown</TableCell>
            <TableCell>Designer</TableCell>
            <TableCell>charlie.brown@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
