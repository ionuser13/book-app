import * as React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from '@mui/icons-material/Search';

// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';  

export default function SearchBar({list}) {
  return (
    <Container>
      <div className="formcontainer w-full">
        <form action="/" className="searchForm">
          <div className="flex align-middle bg-white py-[1.4rem] px-[2.8rem] rounded-3xl text-3xl p-[0.6rem] w-full">
            <input type="text" name="book name" id="bookName" placeholder="Harry Potter and..." className="text-xl p-[0.6rem] w-full" />
            <button type="submit" className="flex flex-col">
              <SearchIcon />
            </button>
          </div>
        </form>
      </div>
      <Stack spacing={2} sx={{ width: 'full' }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={list.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </Container>
  );
}