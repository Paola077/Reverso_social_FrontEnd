import React, { useState } from "react";
import "./_SignInUpForm.scss";
import { useMutation, useQueryClient} from "@tanstack/react-query";
import { userRegister, userLogin } from "../../../services/userApi";
import logoReversoWhite from "../../../../public/images/logoReversoSocial.svg"
import FSLogoWhite from "../../../../public/images/logoFemsenior.svg"

const SignInUpForm = ({ defaultToSignUp = false }) => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(defaultToSignUp);
  const queryClient = useQueryClient();
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
	setData(null);
    setError(null);
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    resetForm();
	setData(null);
    setError(null);
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
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (res) => {
      setError(res?.response.data);
    },
  });

  return (
    <>
      <div
        className={`signContainer ${
          isRightPanelActive ? "rightPanelActive" : ""
        }`}
        id="container"
      >
        <div className="formContainer signUpContainer">
          <form action="#">
            <h2 className="registerTitle">Crea una cuenta</h2>

            <input
              type="text"
              placeholder="Nombre"
              onChange={handleChange}
              name="name"
              value={form.name}
              required
            />
            {data?.name && <p className="errorText">{data?.name.message}</p>}
            
             <input
              type="text"
              placeholder="Apellido"
              onChange={handleChange}
              name="lastname"
              value={form.lastname}
              required
            />
            {data?.lastname && <p className="errorText">{data?.lastname.message}</p>}

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
              type="text"
              placeholder="Nombre de usuario"
              onChange={handleChange}
              name="username"
              value={form.username}
              required
            />
            {data?.username && <p className="errorText">{data?.username.message}</p>}

            <input
              type="date"
              placeholder="Fecha de nacimiento"
              onChange={handleChange}
              name="birthday"
              value={form.birthday}
              required
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
              required
            />
            {data?.password && (
              <p className="errorText">{data?.password.message}</p>
            )}

            <button className="ghost" onClick={handleRegister}>Registrar</button>
			<p href="#">
              Ya tienes cuenta? Accede{" "}
              <span className="ghost" onClick={handleSignInClick} id="signIn">
                {" "}
                Aqui
              </span>
            </p>
            
          </form>
        </div>
        <div className="formContainer signInContainer">
          <form action="#">
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
            <button onClick={handleLogin}>Ingresar</button>
            <p href="#">
              No tienes cuenta? Accede{" "}
              <span className="ghost" onClick={handleSignUpClick} id="signUp">
                {" "}
                Aqui
              </span>
            </p>
          </form>
        </div>

        <div className="overlayContainer">
          <div className="overlay">
            <div className="overlayPanel overlayLeft">
              <h3>Bienvenida a </h3>
              <div className="overlayLogo">
				<img src={logoReversoWhite}></img>
				<img src={FSLogoWhite}></img>
              </div>
            </div>
            <div className="overlayPanel overlayRight">
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
