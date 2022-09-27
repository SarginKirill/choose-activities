import {
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import { HeaderText } from '../../UI/HeaderText/HeaderText'

export function DoneTable(props) {
  const { data } = props
  return (
    <>
      <HeaderText text="Comleted challenges" />

      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>When</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1 + '. ' + item.activity}
                </TableCell>
                <TableCell align="left">{item.type}</TableCell>
                <TableCell align="left">{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
