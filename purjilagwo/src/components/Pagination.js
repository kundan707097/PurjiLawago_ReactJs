import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{".css-ew7dpx-MuiTablePagination-selectLabel": {mb:0},".css-3wlpfe-MuiTablePagination-displayedRows ": {mb:0}, ".css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar": {alignItems:"center"}}}
    />
  );
}