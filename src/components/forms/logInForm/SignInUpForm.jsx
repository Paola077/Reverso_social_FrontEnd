import React, { useState, useEffect } from "react";
import "./_SignInUpForm.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userRegister, userLogin } from "../../../services/userApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import logoReversoWhite from "../../../../public/images/RSLogoWhite.svg";
import FSLogoWhite from "../../../../public/images/FSLogoWhite.svg";
import { jwtDecode } from "jwt-decode";
import Alert from "../../modal/alerts/Alert";

const SignInUpForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [isSignPanelActive, setIsSignPanelActive] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const queryClient = useQueryClient();
  const [data, setData] = useState(null);
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
    setData(null);
    setError(null);
    registerMutation.mutate(form);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setData(null);
    setError(null);
    loginMutation.mutate(form);
  };

  const registerMutation = useMutation({
    mutationFn: (form) => userRegister(form),
    onSuccess: (res) => {
      setData(res);
      resetForm();
      setIsSignPanelActive(false);
      queryClient.invalidateQueries({ queryKey: ["user"] });
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
    onError: (res) => {
      setError(res?.response?.data || "Error al iniciar sesión.");
    },
  });

  return (
    <div
      className={`signContainer ${isSignPanelActive ? "signPanelActive" : ""}`}
      id="container"
    >
      <div
        className="formContainer signUpContainer"
        style={{ display: isSignPanelActive ? "block" : "none" }}
      >
        <form onSubmit={handleRegister}>
          <h2 className="registerTitle">Crea una cuenta</h2>
          <input
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="name"
            value={form.name}
          />
          {data?.name && <p className="errorText">{data?.name.message}</p>}

          <input
            type="text"
            placeholder="Apellido"
            onChange={handleChange}
            name="lastname"
            value={form.lastname}
          />
          {data?.lastname && (
            <p className="errorText">{data?.lastname.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
          {data?.email && <p className="errorText">{data?.email.message}</p>}

          <input
            type="text"
            placeholder="Nombre de usuario"
            onChange={handleChange}
            name="username"
            value={form.username}
          />
          {data?.username && (
            <p className="errorText">{data?.username.message}</p>
          )}

          <input
            type="date"
            placeholder="Fecha de nacimiento"
            onChange={handleChange}
            name="birthday"
            value={form.birthday}
          />
          {data?.birthday && (
            <p className="errorText">{data?.birthday.message}</p>
          )}

          <input
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            name="password"
            value={form.password}
          />
          {data?.password && (
            <p className="errorText">{data?.password.message}</p>
          )}

          <button className="ghost" type="submit">
            Registrar
          </button>
          <p>
            Ya tienes cuenta? Accede{" "}
            <Link
              to="/reverso-social/login"
              className="ghost"
              onClick={() => setIsSignPanelActive(false)}
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
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={form.email}      
          />
          {data?.email && <p className="errorText">{data?.email.message}</p>}

          <input
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            name="password"
            value={form.password}    
          />
          {data?.password && (
            <p className="errorText">{data?.password.message}</p>
          )}
          {error && <p className="errorText">{error?.message}</p>}

          <button type="submit">Ingresar</button>
          <p>
            No tienes cuenta? Regístrate{" "}
            <Link
              to="/reverso-social/signin"
              className="ghost"
              onClick={() => setIsSignPanelActive(true)}
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
