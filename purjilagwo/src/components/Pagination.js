import  React, { useEffect, useState } from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo({maxCount, setPagination, pagination, pageMain, setPageMain}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setPageMain(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPagination((prevValue) => ({
      ...prevValue,
      MaxResultCount: parseInt(event.target.value),
      SkipCount: 0
    }))
    setPage(0);
    setPageMain(0);
  };

  useEffect(() => {
    setRowsPerPage(pagination.MaxResultCount)
    setPage(pageMain)
  }, [pagination, pageMain])

  

  return (
    <TablePagination
      component="div"
      count={maxCount}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{".css-ew7dpx-MuiTablePagination-selectLabel": {mb:0},".css-3wlpfe-MuiTablePagination-displayedRows ": {mb:0}, ".css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar": {alignItems:"center"}}}
      // showFirstButton
      // showLastButton 
    />
  );
}