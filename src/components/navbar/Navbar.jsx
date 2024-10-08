import React from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Search from "./search/Search";
import { Button } from "../buttons/button/Button";
import { useAuth } from "../../context/AuthContext";
import "./_Navbar.scss";

const Navbar = () => {
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
