import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(type, vendor, payAmount, payTxHash, reTxHash, reTxAmount, remainderAllowance, reDate) {
  return { type, vendor, payAmount, payTxHash, reTxHash, reTxAmount, remainderAllowance, reDate };
}


export default function ViewTransactions() {
    let response;
    let rows;
    if (typeof window !== "undefined") {
        response =  JSON.parse(localStorage.getItem("data" || "[]"));
    }

   for(let txn in Object.values(response)) {
    let info = response[txn];
    rows = [
        createData('Wellness Fund', info.vendor, '100USDC', '0x456', '0x973847', '75USDC', '925USDC', '11/11/2022'),
      
      ];
   }

    return (
        <TableContainer component={Paper} style={{width:'80%', margin:'0 auto'}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Expense Type</TableCell>
                <TableCell align="right">Vendor</TableCell>
                <TableCell align="right">Payment Amount</TableCell>
                <TableCell align="right">Payment Transaction Hash</TableCell>
                <TableCell align="right">Reimbursement Transaction Hash</TableCell>
                <TableCell align="right">Reimbursement Transaction Amount</TableCell>
                <TableCell align="right">Remaining Allowance</TableCell>
                <TableCell align="right">Reimbursement Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.type}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.type}
                  </TableCell>
                  <TableCell align="right">{row.vendor}</TableCell>
                  <TableCell align="right">{row.payAmount}</TableCell>
                  <TableCell align="right">{row.payTxHash}</TableCell>
                  <TableCell align="right">{row.reTxHash}</TableCell>
                  <TableCell align="right">{row.reTxAmount}</TableCell>
                  <TableCell align="right">{row.remainderAllowance}</TableCell>
                  <TableCell align="right">{row.reDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}