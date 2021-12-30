import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './employee.css';

function createData(id, template_name, template_category, image_path, count) {
  return { id, template_name, template_category, image_path, count};
}

const results = [
  createData(1, 'SubAccount 1', 'SubAccount1@abc.com', 'pass1', 'xyz'),
  createData(2, 'SubAccount 2', 'SubAccount2@abc.com', 'pass2', 'xyz'),
  createData(3, 'SubAccount 3', 'SubAccount3@abc.com', 'pass3', 'xyz'),
  createData(4, 'SubAccount 4', 'SubAccount4@abc.com', 'pass4', 'xyz'),
  createData(5, 'SubAccount 5', 'SubAccount5@abc.com', 'pass5', 'xyz'),
  createData(6, 'SubAccount 6', 'SubAccount6@abc.com', 'pass6', 'xyz'),
  createData(7, 'SubAccount 7', 'SubAccount7@abc.com', 'pass7', 'xyz'),
  createData(8, 'SubAccount 8', 'SubAccount8@abc.com', 'pass8', 'xyz'),
  createData(9, 'SubAccount 9', 'SubAccount9@abc.com', 'pass9', 'xyz'),
];

export default function ResultList() {
  return (
    <TableContainer component={Paper} className='Table'>
      <Table sx={{ minWidth: '100vh' , alignSelf: 'center'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>TEMPLATE NAME</TableCell>
            <TableCell>TEMPLATE CATEGORY</TableCell>
            <TableCell align="right">IMAGE PATH</TableCell>
            <TableCell align="right">COUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow
              key={result.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {result.id}
              </TableCell>
              <TableCell>{result.template_name}</TableCell>
              <TableCell>{result.template_category}</TableCell>
              <TableCell align="right">{result.image_path}</TableCell>
              <TableCell align="right">{result.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
