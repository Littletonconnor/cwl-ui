import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'cwl-ui'

export default function Dense() {
  return (
    <div className="w-[500px]">
      <Table dense>
        <TableHead>
          <TableRow>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Player</TableHeader>
            <TableHeader>Pos</TableHeader>
            <TableHeader>GP</TableHeader>
            <TableHeader>G</TableHeader>
            <TableHeader>A</TableHeader>
            <TableHeader>P</TableHeader>
            <TableHeader>+/-</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>R</TableCell>
            <TableCell>80</TableCell>
            <TableCell>30</TableCell>
            <TableCell>69</TableCell>
            <TableCell>99</TableCell>
            <TableCell>+18</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell>R</TableCell>
            <TableCell>82</TableCell>
            <TableCell>40</TableCell>
            <TableCell>47</TableCell>
            <TableCell>87</TableCell>
            <TableCell>+10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Alice Johnson</TableCell>
            <TableCell>C</TableCell>
            <TableCell>74</TableCell>
            <TableCell>40</TableCell>
            <TableCell>45</TableCell>
            <TableCell>85</TableCell>
            <TableCell>+31</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>Bob Williams</TableCell>
            <TableCell>C</TableCell>
            <TableCell>80</TableCell>
            <TableCell>36</TableCell>
            <TableCell>44</TableCell>
            <TableCell>80</TableCell>
            <TableCell>-7</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>Charlie Brown</TableCell>
            <TableCell>L</TableCell>
            <TableCell>82</TableCell>
            <TableCell>23</TableCell>
            <TableCell>26</TableCell>
            <TableCell>49</TableCell>
            <TableCell>+21</TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </div>
  )
}