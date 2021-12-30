import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './employee.css';

function createData(name, email, password, role) {
  return { name,  email, password, role};
}

const employees = [
  createData('SubAccount 1', 'SubAccount1@abc.com', 'pass1', 'xyz'),
  createData('SubAccount 2', 'SubAccount2@abc.com', 'pass2', 'xyz'),
  createData('SubAccount 3', 'SubAccount3@abc.com', 'pass3', 'xyz'),
  createData('SubAccount 4', 'SubAccount4@abc.com', 'pass4', 'xyz'),
  createData('SubAccount 5', 'SubAccount5@abc.com', 'pass5', 'xyz'),
  createData('SubAccount 6', 'SubAccount6@abc.com', 'pass6', 'xyz'),
  createData('SubAccount 7', 'SubAccount7@abc.com', 'pass7', 'xyz'),
  createData('SubAccount 8', 'SubAccount8@abc.com', 'pass8', 'xyz'),
  createData('SubAccount 9', 'SubAccount9@abc.com', 'pass9', 'xyz'),
];

export default function EmployeeList() {
  return (
    <TableContainer component={Paper} className='Table'>
      <Table sx={{ minWidth: '100vh' , alignSelf: 'center'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell align="right">PASSWORD</TableCell>
            <TableCell align="right">ROLE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow
              key={emp.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {emp.name}
              </TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell align="right">{emp.password}</TableCell>
              <TableCell align="right">{emp.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
