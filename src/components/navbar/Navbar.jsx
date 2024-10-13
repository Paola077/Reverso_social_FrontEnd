import React, { useState, useEffect } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Box, IconButton, Popover } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./search/Search";
import { Button } from "../buttons/button/Button";
import { useAuth } from "../../context/AuthContext";
import "./_Navbar.scss";
import Alert from "../modal/alerts/Alert";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout, username } = useAuth();
  const isFemseniors = location.pathname.startsWith(
    "/reverso-social/femsenior"
  );
  const isLoginOrSignin =
    location.pathname.includes("/reverso-social/login") ||
    location.pathname.includes("/reverso-social/signin");

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
  const loginNavbar = isLoginOrSignin ? "loginNavbar" : "";

  const handleLogout = () => {
    logout();
    setIsAlertOpen(true);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    navigate("/reverso-social/femsenior");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
  }, [location.pathname]);

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
              position: "absolute",
              top: "-1rem",
              width: "100vw",
              backgroundColor: "white",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
              borderRadius: "0 0 20px 20px",
              paddingTop: "5rem",
            }}
          >
            <IconButton
              onClick={handleMenuToggle}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "black",
              }}
            >
              &#10005;
            </IconButton>

            {isAuthenticated ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingBottom: "1rem",
                    marginTop: "-1.5rem",
                    marginBottom: "0"
                  }}
                >
                  <span className="username">{username}</span>
                  <IconButton onClick={handleLogout} title="Cerrar sesión">
                    <img
                      className="logo-icon-img"
                      src="/icons/Logout.svg"
                      alt="Cerrar sesión"
                    />
                  </IconButton>
                </Box>
              </>
            ) : (
              <>
                <NavLink
                  to="/reverso-social/login"
                  className="navLinkBurger navLinkBold"
                >
                  Iniciar sesión
                </NavLink>
                <NavLink
                  to="/reverso-social/signin"
                  className="navLinkBurger navLinkBold"
                >
                  Registrarse
                </NavLink>
              </>
            )}

            {isLoginOrSignin ? (
              <>
                <NavLink
                  to="/reverso-social"
                  className="navLinkBurger navLinkBold loginMenu"
                >
                  Reverso Social
                </NavLink>

                <NavLink
                  to="/reverso-social/femsenior"
                  className="navLinkBurger navLinkBold loginMenu"
                >
                  FEMseniors
                </NavLink>
              </>
            ) : (
              <>
                {isFemseniors && (
                  <>
                    <NavLink
                      to="/reverso-social"
                      className="navLinkBurger navLinkBold"
                    >
                      Reverso Social
                    </NavLink>

                    <NavLink
                      to="/formulario/colabora"
                      className="navLinkBurger navLinkBold"
                    >
                      Contactar
                    </NavLink>
                  </>
                )}

                {isReversoSocial && (
                  <>
                    <NavLink
                      to="/reverso-social/femsenior"
                      className="navLinkBurger navLinkBold"
                    >
                      FEMseniors
                    </NavLink>

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
                    <NavLink
                      to="/formulario/colabora"
                      className="navLinkBurger navLinkBold"
                    >
                      Contactar
                    </NavLink>
                  </>
                )}
              </>
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

        <Box
          className={`searchContainer ${
            isLoginOrSignin ? "invisibleSearch" : ""
          }`}
        >
          <Search disabled={isLoginOrSignin} />
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
            <>
              <span className="username">{username}</span>
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
            </>
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
      <Alert
        isOpen={isAlertOpen}
        onclose={handleAlertClose}
        alert="Se ha cerrado la sesión correctamente."
      >
        <Button
          textButton={"Aceptar"}
          backgroundColor={"#7176f8"}
          border={"#7176f8"}
          width={"12.5rem"}
          height={"2.75rem"}
          color={"white"}
          onClick={() => setIsAlertOpen(false)}
        />
      </Alert>
    </AppBar>
  );
};

export default Navbar;
