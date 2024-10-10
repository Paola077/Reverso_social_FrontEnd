import React, { useState } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Box, IconButton, Popover } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./search/Search";
import { Button } from "../buttons/button/Button";
import { useAuth } from "../../context/AuthContext";
import "./_Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const isFemseniors = location.pathname.startsWith(
    "/reverso-social/femsenior"
  );
  const isLoginOrSignin =
    location.pathname === "/reverso-social/login" ||
    location.pathname === "/reverso-social/signin";
  const isReversoSocial =
    location.pathname === "/reverso-social" && !isLoginOrSignin;

  const handleLogInClick = () => {
    navigate("/reverso-social/login");
  };

  const handleSignInClick = () => {
    navigate("/reverso-social/signin", { state: { isSignPanelActive: true } });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/reverso-social/femsenior");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="static"
      className={`navbar ${
        isFemseniors
          ? "femseniorNavbar"
          : isLoginOrSignin
          ? "loginNavbar"
          : "reversoNavbar"
      }`}
    >
      <Toolbar className="navbarToolbar">
        <div className="logoContainer">
          {isFemseniors || isLoginOrSignin ? (
            <img
              src="/images/logoFemsenior.svg"
              alt="Logo FEMsenior"
              className="logo logofemsenior"
            />
          ) : (
            <img
              src="/images/logoReversoSocial.svg"
              alt="Logo Reverso Social"
              className="logo"
            />
          )}
        </div>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="menuButton"
          onClick={handleMenuToggle}
          sx={{ position: "relative" }}
        >
          <MenuIcon className="burger" />
        </IconButton>

        {isMenuOpen && (
          <Box
            sx={{
              position: "absolute", // Menú flotante
              top: "-1rem", // Un poco por debajo del icono
              right: 0, // Alineado con el icono
              width: "100vw", // Ancho del menú
              backgroundColor: "white",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
              padding: "1rem",
              display: "flex",
              flexDirection: "column", // Mostrar los enlaces en columna
              gap: "0.5rem", // Espacio entre los enlaces
              borderRadius: "0 0 20px 20px",
              paddingTop: "4rem",
            }}
          >
            {/* Botón "X" para cerrar el menú */}
            <IconButton
              onClick={handleMenuToggle} // Cierra el menú al hacer clic
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "black",
              }}
            >
              &#10005; {/* El carácter X */}
            </IconButton>

            {/* Mostrar el enlace solo si no estás exactamente en /reverso-social */}
            {location.pathname === "/reverso-social" ? null : (
              <NavLink to="/reverso-social" className="navLinkBurger">
                Reverso Social
              </NavLink>
            )}

            <NavLink
              to="#intro"
              className="navLinkBurger"
              onClick={() => scrollToSection("intro")}
            >
              Nuestro propósito
            </NavLink>
            <NavLink
              to="#carousel"
              className="navLinkBurger"
              onClick={() => scrollToSection("carousel")}
            >
              Qué ofrecemos
            </NavLink>
            <NavLink
              to="#aboutUs"
              className="navLinkBurger"
              onClick={() => scrollToSection("aboutUs")}
            >
              Quienes somos
            </NavLink>
            <NavLink to="/formulario/colabora" className="navLinkBurger">
              Contáctanos
            </NavLink>

            {/* Mostrar el enlace solo si no estás exactamente en /reverso-social/femsenior */}
            {!location.pathname.startsWith("/reverso-social/femsenior") && (
              <NavLink to="/reverso-social/femsenior" className="navLinkBurger">
                FEMseniors
              </NavLink>
            )}
          </Box>
        )}

        <Box className="linksContainer">
          {isReversoSocial ? (
            <>
              <div className="dropdown">
                <NavLink to="/reverso-social" className="navLink">
                  Reverso Social
                </NavLink>
                <ul className="dropdownMenu">
                  <li>
                    <NavLink
                      to="#intro"
                      onClick={() => scrollToSection("intro")}
                    >
                      Nuestro propósito
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#carousel"
                      onClick={() => scrollToSection("carousel")}
                    >
                      Qué ofrecemos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#collaborate"
                      onClick={() => scrollToSection("collaborate")}
                    >
                      Contáctanos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#aboutUs"
                      onClick={() => scrollToSection("aboutUs")}
                    >
                      Quienes somos
                    </NavLink>
                  </li>
                </ul>
              </div>
              <NavLink to="/reverso-social/femsenior" className="navLink">
                FEMseniors
              </NavLink>
            </>
          ) : isFemseniors ? (
            <>
              <NavLink to="/reverso-social" className="navLink">
                Reverso Social
              </NavLink>
              <NavLink to="/formulario/colabora" className="navLink">
                Colabora
              </NavLink>
            </>
          ) : isLoginOrSignin ? (
            <>
              <NavLink to="/reverso-social" className="navLink">
                Reverso Social
              </NavLink>
              <NavLink to="/reverso-social/femsenior" className="navLink">
                FEMsenior
              </NavLink>
            </>
          ) : null}
        </Box>

        <Box className="searchContainer">
          <Search
            disabled={isLoginOrSignin}
            className={isLoginOrSignin ? "invisibleSearch" : ""}
          />
        </Box>

        <Box className="authButtons">
          {isFemseniors && !isAuthenticated && (
            <>
              <Button
                className="buttonNav"
                textButton={"Iniciar sesión"}
                backgroundColor={"transparent"}
                border={"none"}
                color={"#35399B"}
                height={"2rem"}
                width={"10rem"}
                padding={"0.25rem"}
                onClick={handleLogInClick}
              >
                Iniciar sesión
              </Button>
              <Button
                className="buttonNav"
                textButton={"Registrarse"}
                backgroundColor={"#35399B"}
                border={"none"}
                height={"2rem"}
                width={"10rem"}
                color={"#fff"}
                padding={"0.25rem"}
                onClick={handleSignInClick}
              >
                Registrarse
              </Button>
            </>
          )}
          {isFemseniors && isAuthenticated && (
            <button
              className="logout-icon"
              onClick={handleLogout}
              title="Cerrar sesión"
            >
              <img
                className="logo-icon-img"
                src="/icons/Logout.svg"
                alt="cerrar sesión"
              />
            </button>
          )}
          {isReversoSocial && (
            <Button
              className="buttonNav"
              backgroundColor={"#35399B"}
              height={"2rem"}
              width={"8rem"}
              padding={"0.25rem"}
              color={"#fff"}
              textButton={"Colabora"}
              component={NavLink}
              border={"none"}
              to="/formulario/colabora"
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
