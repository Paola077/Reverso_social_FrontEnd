import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Search from "./search/Search";
import "./_Navbar.scss"; 

const Navbar = () => {
  const location = useLocation();
  const isFemseniors = location.pathname.startsWith(
    "/reverso-social/femsenior"
  );
  const isReversoSocial = location.pathname === "/reverso-social";

  return (
    <AppBar
      position="static"
      className={`navbar ${
        isFemseniors ? "femsenior-navbar" : "reverso-navbar"
      }`}
    >
      <Toolbar className="navbar-toolbar">
        <div className="logo-container">
          {isFemseniors ? (
            <img
              src="/images/logoFemsenior.svg"
              alt="Logo FEMsenior"
              className="logo"
            />
          ) : (
            <img
              src="/images/logoReversoSocial.svg"
              alt="Logo Reverso Social"
              className="logo"
            />
          )}
        </div>
        <Box className="links-container">
          {isReversoSocial ? (
            <>
              <div className="dropdown">
                <NavLink to="/reverso-social" className="nav-link">
                  Reverso Social
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/reverso-social/proposito">
                      Nuestro propósito
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/reverso-social/ofrecemos">
                      Qué ofrecemos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/reverso-social/queremos">
                      Qué queremos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/reverso-social/contacto">Contáctanos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/reverso-social/somos">Quienes somos</NavLink>
                  </li>
                </ul>
              </div>
              <NavLink to="/reverso-social/femsenior" className="nav-link">
                FEMseniors
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/reverso-social" className="nav-link">
                Reverso Social
              </NavLink>
              <NavLink to="/colabora" className="nav-link">
                Colabora
              </NavLink>
            </>
          )}
        </Box>

        <div className="search">
          <Search disabled={isReversoSocial} />
        </div>

        <Box className="auth-buttons">
          {isFemseniors ? (
            <>
              <Button className="nav-link" component={NavLink} to="/login">
                Iniciar Sesión
              </Button>
              <Button
                className="nav-link nav-button"
                component={NavLink}
                to="/signin"
              >
                Registrarse
              </Button>
            </>
          ) : (
            <Button
              className="nav-link nav-button"
              component={NavLink}
              to="/contact"
            >
              Colabora
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
