import { createContext, useContext, useState, useEffect } from "react";
import React from "react";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedRole = localStorage.getItem("role");
    const storedUsername = localStorage.getItem("username");

    if (storedToken && storedUser && storedRole && storedUsername) {
      setIsAuthenticated(true);
      setRole(storedRole);
      setToken(storedToken);
      setUser(storedUser);
      setUsername(storedUsername); 
    }
  }, []);

  const login = (accessToken, user, role) => {
    const username = user?.username; 

   
    localStorage.setItem("authToken", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("role", role);
    localStorage.setItem("username", username);

   
    setToken(accessToken);
    setRole(role);
    setUser(user);
    setUsername(username); 
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("username");

    setIsAuthenticated(false);
    setToken(null);
    setUser(null);
    setUsername(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token, role, user, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};