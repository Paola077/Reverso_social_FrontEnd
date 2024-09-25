import * as React from "react";
import "./_Search.scss"; 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
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
