
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(no,trackingId,name,status,date) {
  return {no,trackingId,name,status,date};
}

function makeStyle(status) {
  if(status === "Approved") {
    return {
      color:'green',
      background:'rgb(145 254 159 / 47%)'
    }
  } else if (status === "Delivered") {
  return {
    color:'White',
    background:'#59bfff'
  }
  } else{
   return {
    color:'red',
    background:'#ffadad8f'
   }
  }
}

const rows = [
  createData(1, 18908404, "Adam Smith", "Approved", "1 January, 2024" ,"Details"),
  createData(2, 18908324, "Diana Ross", "Pending", "3 January, 2024"),
  createData(3, 18908424, "Terry James", "Approved", "4 January, 2024", ),
  createData(4, 18908421, "Skye Jackson", "Delivered", "7 January, 2024",),
];

const TableSection = () => {
  return (
    <div className="Table ">
  <TableContainer className='rounded-lg shadow-lg py-4 px-4' component={Paper}>
        <h3 className='text-black font-raleway font-[500] text-[20px] pb-0'>Invoice Activity</h3>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className=''>
          <TableCell className='thead '  >S/N</TableCell>
          <TableCell className='thead '  >Invoice Number</TableCell>
          <TableCell className='thead ' align="left">Receipient</TableCell>
          <TableCell className='thead ' align="left">Status</TableCell>
          <TableCell className='thead ' align="left">Order Date</TableCell>
          <TableCell className='thead ' align="left"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.no}
            </TableCell>
            <TableCell align="left">#{row.trackingId}</TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left"> 
              <span className="status" style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
            <TableCell align="left" className='font-raleway text-[24px] text-red-500'>{row.date}</TableCell>
            <TableCell align="left" className='details'>
              <a href="#">Details</a>
            </TableCell>
          
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default TableSection

/*
<th scope="col" className="px-6 py-4">No</th>
                <th scope="col" className="px-6 py-4">Invoice Number</th>
                <th scope="col" className="px-6 py-4">Recipient</th>
                <th scope="col" className="px-6 py-4">order Date</th>
                <th scope="col" className="px-6 py-4">Ststus</th>
                <th scope="col" className="px-6 py-4">Price</th>
*/