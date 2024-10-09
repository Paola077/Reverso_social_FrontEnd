import React, { useEffect, useState, useCallback } from "react";
import "./_Search.scss";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash.debounce";
import { NavLink, useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

  const fetchResults = useCallback(async (value) => {
    if (value.trim() === "") {
      setResults([]);
      setDropdownVisible(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/events/search?title=${value.trim()}`
      );
      if (!response.ok) {
        throw new Error("Error en la búsqueda");
      }

      const data = await response.json();
      setResults(data);
      setDropdownVisible(data.length > 0);
    } catch (error) {
      console.error("Error al buscar eventos:", error);
    }
  }, []);

  const debouncedFetchResults = useCallback(debounce(fetchResults, 300), [
    fetchResults,
  ]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    setSelectedIndex(-1);
    debouncedFetchResults(value);
  };

  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest(".search")) {
      setDropdownVisible(false);
    }
  }, []);

  const handleSelectResult = (eventId) => {
    setQuery('');
    navigate(`/reverso-social/femsenior/eventos/${eventId}`);
    setDropdownVisible(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (event.key === "Enter" && selectedIndex !== -1) {
      handleSelectResult(results[selectedIndex].id);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Box className="searchContainer">
      <div className="search">
        <SearchIcon className="searchIcon" />
        <input
          type="text"
          placeholder="Buscar…"
          className="styledInputBase"
          value={query}
          onChange={handleSearch}
          onKeyDown={handleKeyDown} 
        />
        {dropdownVisible && results.length > 0 && (
          <div className="dropdownSearch">
            <ul className="dropdownMenuSearch">
              {results.map((event, index) => (
                <li
                  key={event.id}
                  className={index === selectedIndex ? "selected" : ""}
                  onClick={() => handleSelectResult(event.id)}
                >
                  {event.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Box>
  );
};

export default Search;
