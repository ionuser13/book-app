import React from 'react';
import SearchBar from '@/components/Books/SearchBar';
import { Container } from '@mui/material';
import top100Films from "@/public/data.json";
import BooksTable from '@/components/Books/BooksTable';

const Books = () => {
  return (
    <div>
      <Container sx={{display: 'flex', flexDirection: 'column', gap: 8}}>
        <SearchBar list={top100Films}></SearchBar>
        <BooksTable></BooksTable>
      </Container>
    </div>
  )
}

export default Books;