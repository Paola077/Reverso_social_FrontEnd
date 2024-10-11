import { createContext, useContext, useState, useEffect } from "react";
import React from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUsername = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");

    if (storedToken && storedUsername && storedRole) {
      setIsAuthenticated(true);
      setToken(storedToken);
      setUsername(storedUsername);
      setRole(storedRole);
    }
  }, []);

  const login = (accessToken, username, role) => {
    if (typeof username === "object") {
      username = username.username || username.email || JSON.stringify(username);
    }
  
    localStorage.setItem("authToken", accessToken);
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
  
    setToken(accessToken);
    setUsername(username); 
    setRole(role);
    setIsAuthenticated(true);
  
    console.log("Username obtenido en login:", username); 
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("role");

    setIsAuthenticated(false);
    setToken(null);
    setUsername(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token, role, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};