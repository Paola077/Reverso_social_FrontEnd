import { createContext, useContext, useState, useEffect } from "react";
import React from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role");

    if (token && user && storedRole) {
      setIsAuthenticated(true);
      setRole(storedRole);
      setToken(token);
    }
    setLoading(false);
  }, []);

  const login = (token, user, role) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("role", role);
    setToken(token);
    setIsAuthenticated(true);
    setRole(role);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, token, role }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
