import React, { useEffect, useState, useCallback } from "react";
import "./_Search.scss";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

  const fetchData = async (url, errorMessage) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(errorMessage);
    return response.json();
  };

  const fetchResults = useCallback(async (value) => {
    if (!value.trim()) {
      resetSearch();
      return;
    }

   const trimmedValue = value.trim();

    const endpoints = [
      {
        url: `http://localhost:3001/api/events/search?title=${trimmedValue}`,
        section: 'events',
        searchLabel: 'Evento',
        errorMessage: 'Error en la búsqueda de eventos',
      },
      {
        url: `http://localhost:3001/api/services/search?title=${trimmedValue}`,
        section: 'services',
        searchLabel: 'Servicios',
        errorMessage: 'Error en la búsqueda de servicios',
      },
      {
        url: `http://localhost:3001/api/employs/search?position=${trimmedValue}`,
        section: 'employs',
        searchLabel: 'Empleos',
        errorMessage: 'Error en la búsqueda de empleos',
      },
      {
        url: `http://localhost:3001/api/resources/search?title=${trimmedValue}`,
        section: 'resources',
        searchLabel: 'Recursos',
        errorMessage: 'Error en la búsqueda de recursos',
      },
    ];

    try {
      const resultsArray = await Promise.all(
        endpoints.map((endpoint) =>
          fetchData(endpoint.url, endpoint.errorMessage).then((data) =>
            data.map((item) => ({
              ...item,
              section: endpoint.section,
              searchLabel: endpoint.searchLabel,
              id: item.id,
            }))
          )
        )
      );

      const combinedResults = resultsArray.flat();

      setResults(combinedResults);
      setDropdownVisible(combinedResults.length > 0);
    } catch (error) {
      console.error('Error al buscar datos:', error);
      resetSearch();
    }
  }, []);

  const debouncedFetchResults = useCallback(debounce(fetchResults, 600), [fetchResults]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setSelectedIndex(-1);
    debouncedFetchResults(value);
  };

  const handleSelectResult = (result) => {
    if (!result || !result.id || !result.section) {
      console.error("Resultado no válido:", result);
      return;
    }
    navigate(
      `/reverso-social/femsenior/detalles/${result.section}/${result.id}`
    );
    resetSearch();
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowDown":
        setSelectedIndex((prevIndex) =>
          prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex
        );
        break;
      case "ArrowUp":
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        break;
      case "Enter":
        if (selectedIndex !== -1) handleSelectResult(results[selectedIndex]);
        break;
      default:
        break;
    }
  };

  const resetSearch = () => {
    setResults([]);
    setDropdownVisible(false);
    setQuery("");
    setSelectedIndex(-1);
  };

  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest(".search")) resetSearch();
  }, []);

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
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        {dropdownVisible && results.length > 0 && (
          <div className="dropdownSearch">
            <ul className="dropdownMenuSearch">
              {results.map((result, index) => (
                <li
                  key={result.id}
                  className={index === selectedIndex ? "selected" : ""}
                  onClick={() => handleSelectResult(result)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSelectResult(result);
                  }}
                  tabIndex={0}
                  role="button"
                  onFocus={() => setSelectedIndex(index)}
                >
                  <div>
                    {result.title ? result.title : result.position}
                    <span className="sectionLabel">
                      {result.searchLabel}
                    </span>
                  </div>
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
