import * as React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Box className='search-container'>
    
          <div className="search">
              <SearchIcon className="search-icon"/>
           
            <InputBase
              placeholder="Buscar…"
              inputProps={{ "aria-label": "search" }}
              className="styled-input-base"
              />
              
    </div>
    </Box>
  );
}
