import React, { useState, useEffect } from "react";
import "./_SignInUpForm.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userRegister, userLogin } from "../../../services/userApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"; // Asegúrate de que este sea el hook correcto
import { jwtDecode } from "jwt-decode";

const SignInUpForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth(); // Usar el estado de autenticación global
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
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
    if (isAuthenticated) {
      navigate("/reverso-social/femsenior"); 
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (location.pathname === "/reverso-social/login") {
      setIsRightPanelActive(false);
    } else if (location.pathname === "/reverso-social/signin") {
      setIsRightPanelActive(true);
    }
  }, [location.pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setData(null);
    setError(null);
    loginMutation.mutate(form);
  };


  const loginMutation = useMutation({
    mutationFn: (form) => userLogin(form),
    onSuccess: (res) => {
      console.log("Respuesta completa del servidor:", res);

      const accessToken = res?.accessToken;

      if (accessToken) {
        const decodedToken = jwtDecode(accessToken);
        console.log("Token decodificado:", decodedToken);

        const role = decodedToken?.authorities?.[0] || "USER"; 

        localStorage.setItem("authToken", accessToken);
        localStorage.setItem("user", JSON.stringify({ email: form.email }));
        localStorage.setItem("role", role);

        login(accessToken, { email: form.email }, role);
        queryClient.invalidateQueries({ queryKey: ["user"] });

        navigate("/reverso-social/femsenior");
      } else {
        console.error("No se recibió el token de acceso.");
        setError("Error al recibir los datos de autenticación.");
      }
    },
    onError: (res) => {
      console.error("Error al iniciar sesión:", res);
      setError(res?.response?.data || "Error al iniciar sesión.");
    },
  });
  return (
    <div
      className={`signContainer ${
        isRightPanelActive ? "rightPanelActive" : ""
      }`}
      id="container"
    >
      <div
        className="formContainer signInContainer"
        style={{ display: !isRightPanelActive ? "block" : "none" }}
      >
        <form onSubmit={handleLogin}>
          <h2 className="logInTitle">Accede a tu cuenta</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={form.email}
            required
          />
          {data?.email && <p className="errorText">{data?.email.message}</p>}

          <input
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            name="password"
            value={form.password}
            required
          />
          {data?.password && (
            <p className="errorText">{data?.password.message}</p>
          )}
          {error && <p className="errorText">{error}</p>}

          <button type="submit">Ingresar</button>
          <p>
            No tienes cuenta? Regístrate{" "}
            <Link
              to="/reverso-social/signin"
              className="ghost"
              onClick={() => setIsRightPanelActive(true)}
              id="signIn"
            >
              Aquí
            </Link>
          </p>
        </form>
      </div>

      <div className="overlayContainer">
        <div className="overlay">
          <div className="overlayPanel overlayLeft">
            <h3>Bienvenida a </h3>
            <div className="overlayLogo">
              <img src="/images/RSLogoWhite.svg" alt="Logo Reverso" />
              <img src="/images/FSLogoWhite.svg" alt="Logo Femsenior" />
            </div>
          </div>
          <div className="overlayPanel overlayRight">
            <h3>Bienvenida a </h3>
            <div className="overlayLogo">
              <img src="/images/RSLogoWhite.svg" alt="Logo Reverso" />
              <img src="/images/FSLogoWhite.svg" alt="Logo Femsenior" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUpForm;