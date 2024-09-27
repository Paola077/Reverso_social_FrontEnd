import React, { useState } from "react";
import "./_SignInUpForm.scss";
import { useMutation } from "@tanstack/react-query";
import { userRegister, userLogin } from "../../../services/userApi";
import logoReversoWhite from "../../../../public/images/logoReversoWhite.png"
import FSLogoWhite from "../../../../public/images/FSLogoWhite.png"

const SignInUpForm = ({ defaultToSignUp = false }) => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(defaultToSignUp);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
  });

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
    console.log(form);
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

  const handleSignUpClick = () => {
    resetForm();
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    resetForm();
    setIsRightPanelActive(false);
  };

  const registerMutation = useMutation({
    mutationFn: (form) => userRegister(form),
    onSuccess: (res) => {
      setData(res);
      handleSignInClick();
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const loginMutation = useMutation({
    mutationFn: (form) => userLogin(form),
    onSuccess: (res) => {
      setData(res);
      console.log(res);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (res) => {
      setError(res?.response.data);
      console.log(res);
    },
  });

  return (
    <>
      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h2>Crea una cuenta</h2>

            <input
              type="text"
              placeholder="Nombre"
              onChange={handleChange}
              name="name"
              value={form.name}
              required
            />
            {data?.name && <p className="error-text">{data?.name.message}</p>}
            
             <input
              type="text"
              placeholder="Apellido"
              onChange={handleChange}
              name="lastname"
              value={form.lastname}
              required
            />
            {data?.lastname && <p className="error-text">{data?.lastname.message}</p>}

            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={form.email}
              required
            />
            {data?.email && <p className="error-text">{data?.email.message}</p>}
            
             <input
              type="text"
              placeholder="Nombre de usuario"
              onChange={handleChange}
              name="username"
              value={form.username}
              required
            />
            {data?.username && <p className="error-text">{data?.username.message}</p>}

            <input
              type="date"
              placeholder="Fecha de nacimiento"
              onChange={handleChange}
              name="birthday"
              value={form.birthday}
              required
            />
            {data?.birthday && (
              <p className="error-text">{data?.birthday.message}</p>
            )}

            <input
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
              name="password"
              value={form.password}
              required
            />
            {data?.password && (
              <p className="error-text">{data?.password.message}</p>
            )}

            <button className="ghost" onClick={handleRegister}>Entrar</button>
            
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h2>Accede a tu cuenta</h2>
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={form.email}
            />
            {data?.email && <p className="error-text">{data?.email.message}</p>}

            <input
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
              name="password"
              value={form.password}
            />
            {data?.password && (
              <p className="error-text">{data?.password.message}</p>
            )}
            {error && <p className="error-text">{error?.message}</p>}
            <button onClick={handleLogin}>Entrar</button>
            <p href="#">
              No tienes cuenta? Accede{" "}
              <span className="ghost" onClick={handleSignUpClick} id="signUp">
                {" "}
                Aqui
              </span>
            </p>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h3>Bienvenida a </h3>
              <div className="overlayLogo">
				<img src={logoReversoWhite}></img>
				<img src={FSLogoWhite}></img>
              </div>
            </div>
            <div className="overlay-panel overlay-right">
              <h3>Bienvenida a </h3>

              <div className="overlayLogo">
				<img src={logoReversoWhite}></img>
				<img src={FSLogoWhite}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInUpForm;
