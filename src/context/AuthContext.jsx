import { createContext, useContext, useState, useEffect } from "react";
import {jwtDecode} from 'jwt-decode';
import React from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwt_decode(token);
      // Obtener roles del token
      const userRoles = decodedToken.roles || decodedToken.authorities;
      setUserRole(userRoles);

      // Obtener el ID del usuario (si está en el token)
      setUserId(decodedToken.userId || decodedToken.sub); // `sub` es común en tokens JWT para almacenar el ID
      setIsAuthenticated(true);
      
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    const decodedToken = jwt_decode(token);
    // localStorage.setItem("user", JSON.stringify(user));
    // Obtener roles y ID al iniciar sesión
    const userRoles = decodedToken.roles || decodedToken.authorities;
    setUserRole(userRoles);
    setUserId(decodedToken.userId || decodedToken.sub);
    setIsAuthenticated(true);
    
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userRole, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
