import SearchBar from '@/components/Books/SearchBar';
import { Container } from '@mui/material';

import BooksTable from '@/components/Books/BooksTable';

const Books = () => {
  return (
    <div>
      <Container sx={{display: 'flex', flexDirection: 'column', gap: 8, marginY: 8}}>
        <SearchBar></SearchBar>
        <BooksTable />
      </Container>
    </div>
  )
}

export default Books;