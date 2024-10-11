import React, { useState, useEffect } from "react";
import "./_SignInUpForm.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userRegister, userLogin } from "../../../services/userApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import logoReversoWhite from "/images/RSLogoWhite.svg";
import FSLogoWhite from "/images/FSLogoWhite.svg";
import { jwtDecode } from "jwt-decode";
import Alert from "../../modal/alerts/Alert";

const SignInUpForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [isSignPanelActive, setIsSignPanelActive] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const queryClient = useQueryClient();
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    birthday: "",
  });

  useEffect(() => {
    if (location.state?.isSignPanelActive) {
      setIsSignPanelActive(true);
    }
  }, [location]);

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        navigate("/reverso-social/femsenior", {
          state: { showWelcomeAlert: true },
        });
      }, 100);
    }
  }, [isAuthenticated, navigate]);

  const resetForm = () => {
    setForm({
      name: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      birthday: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    registerMutation.mutate(form);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    loginMutation.mutate(form);
  };

  const registerMutation = useMutation({
    mutationFn: (form) => userRegister(form),
    onSuccess: () => {
      resetForm();
      setIsSignPanelActive(false);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      setError(error?.response?.data || "Error al registrarse.");
    },
  });

  const loginMutation = useMutation({
    mutationFn: (form) => userLogin(form),
    onSuccess: (res) => {
      const accessToken = res?.accessToken;
      if (accessToken) {
        const decodedToken = jwtDecode(accessToken);
        const role = decodedToken?.authorities?.[0] || "USER";
        login(accessToken, { email: form.email }, role);
        queryClient.invalidateQueries({ queryKey: ["user"] });
      } else {
        setError("Error al recibir los datos de autenticación.");
      }
    },
    onError: (error) => {
      setError(error?.response?.data || "Error al iniciar sesión.");
    },
  });

  const handlePanel = () => {
    resetForm();
    setError(null);
    setIsSignPanelActive(!isSignPanelActive);
  };

  return (
    <div
      className={`signContainer ${isSignPanelActive ? "signPanelActive" : ""}`}
      id="container"
    >
      <div
        className="formContainer signUpContainer"
        style={{ display: isSignPanelActive ? "block" : "none" }}
      >
        <form onSubmit={handleRegister} className={error ? "inputError" : ""}>
          <h2 className="registerTitle">Crea una cuenta</h2>
          <input className="inputLogin" 
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="name"
            value={form.name}
          />
          {error?.name && <p className="errorText">{error?.name.message}</p>}

          <input className="inputLogin"
            type="text"
            placeholder="Apellido"
            onChange={handleChange}
            name="lastname"
            value={form.lastname}
          />
          {error?.lastname && (
            <p className="errorText">{error?.lastname.message}</p>
          )}

          <input className="inputLogin"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
          {error?.email && <p className="errorText">{error?.email.message}</p>}

          <input className="inputLogin"
            type="text"
            placeholder="Nombre de usuario"
            onChange={handleChange}
            name="username"
            value={form.username}
          />
          {error?.username && (
            <p className="errorText">{error?.username.message}</p>
          )}

          <input className="inputLogin"
            type="date"
            placeholder="Fecha de nacimiento"
            onChange={handleChange}
            name="birthday"
            value={form.birthday}
          />
          {error?.birthday && (
            <p className="errorText">{error?.birthday.message}</p>
          )}

          <input className="inputLogin"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            name="password"
            value={form.password}
          />
          {error?.password && (
            <p className="errorText">{error?.password.message}</p>
          )}

          <button className="loginButton ghost" type="submit">
            Registrar
          </button>
          <p>
            Ya tienes cuenta? Accede{" "}
            <Link
              to="/reverso-social/login"
              className="ghost"
              onClick={() => handlePanel()}
              id="login"
            >
              Aquí
            </Link>
          </p>
        </form>
      </div>

      <div
        className="formContainer signInContainer"
        style={{ display: !isSignPanelActive ? "block" : "none" }}
      >
        {isAlertOpen && (
          <Alert
            isOpen={isAlertOpen}
            onclose={() => setIsAlertOpen(false)}
            alert="¡Bienvenida a la comunidad!"
          />
        )}
        <form onSubmit={handleLogin}>
          <h2 className="logInTitle">Accede a tu cuenta</h2>
          <input className="inputLogin"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
          {error?.email && <p className="errorText">{error?.email.message}</p>}

          <input className="inputLogin"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            name="password"
            value={form.password}
          />
          {error?.password && (
            <p className="errorText">{error?.password.message}</p>
          )}
          {error && <p className="errorText">{error?.message}</p>}

          <button className="loginButton" type="submit">Ingresar</button>
          <p>
            No tienes cuenta? Regístrate{" "}
            <Link
              to="/reverso-social/signin"
              className="ghost"
              onClick={() => handlePanel()}
              id="signIn"
            >
              Aquí
            </Link>
          </p>
        </form>
      </div>

      <div className="loginContainer">
        <div className="login">
          <div className="loginPanel loginLeft">
            <h3>Bienvenida a </h3>
            <div className="loginLogo">
              <img src={logoReversoWhite} alt="Logo Reverso" />
              <img src={FSLogoWhite} alt="Logo Femsenior" />
            </div>
          </div>
          <div className="loginPanel loginRight">
            <h3>Bienvenida a </h3>
            <div className="loginLogo">
              <img src={logoReversoWhite} alt="Logo Reverso" />
              <img src={FSLogoWhite} alt="Logo Femsenior" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUpForm;
