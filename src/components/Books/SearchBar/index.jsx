import * as React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { useGlobalContext } from "src/context/context";
import { useRouter } from "next/router";

export default function SearchBar({ list }) {
  const [searchedTerm, setSearchedTerm] = React.useState("");
  const { setSearchTerm, setResultHeader } = useGlobalContext();

  const handleSearch = async () => {
    if (searchedTerm.length === 0) {
      setSearchTerm("The Lord of the Rings");
      setResultHeader("Please enter a book title...");
    } else {
      setSearchTerm(searchedTerm);
    }
  };

  return (
    <Container>
      <div className="formcontainer w-full mb-2">
        <div className="flex w-full gap-4">
          <TextField
            label="Search by name"
            sx={{width: '100%'}}
            onChange={(e) => setSearchedTerm(e.target.value)}
          />
          <button
            type="submit"
            className="h-fit my-auto"
            onClick={handleSearch}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
      <Stack spacing={2} sx={{ width: "full" }}></Stack>
    </Container>
  );
}
