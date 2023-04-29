import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';

import { useGlobalContext } from "src/context/context";


const columns = [
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'author', label: 'Author', minWidth: 100 },
  {
    id: 'publicationDate',
    label: 'Publication Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'genre',
    label: 'Genre',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

export default function BooksTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { loading, books, resultHeader } = useGlobalContext();

  const booksItems = books.map((bookItem) => {
      return {
        ...bookItem,
        //removes '/works-/' to get only the book id
        id: (bookItem.id).replace('/works/', '' ),
        author: bookItem.author ? bookItem.author[0] : 'author not found',
        publicationDate: bookItem.publicationDate ? bookItem.publicationDate : 'Date not found',
        genre: bookItem.genre ? bookItem.genre[0] : "genre not found",
        description: bookItem.description ? bookItem.description[5] : "description not found",
      };
    });
    console.log(booksItems)
  
  return (
    <div className="w-full">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {booksItems
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((book) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={book.id}>
                    {columns.map((column) => {
                      const value = book[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'title'
                            ? <Link href={'#'}>{value}</Link>
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={booksItems.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
