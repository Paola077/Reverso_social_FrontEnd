import React from "react";
import "./_Search.scss"; // Asegúrate de que los estilos de búsqueda se importan correctamente
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Box className="search-container">
      <div className="search">
        <SearchIcon className="search-icon" />
        <InputBase
          placeholder="Buscar…"
          inputProps={{ "aria-label": "search" }}
          className="styled-input-base"
        />
      </div>
    </Box>
  );
};

export default Search;
