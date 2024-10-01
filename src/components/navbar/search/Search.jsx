import React from "react";
import "./_Search.scss";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Box className="searchContainer">
      <div className="search">
        <SearchIcon className="searchIcon" />
        <InputBase
          placeholder="Buscar…"
          inputProps={{ "aria-label": "search" }}
          className="styledInputBase"
        />
      </div>
    </Box>
  );
};

export default Search;
