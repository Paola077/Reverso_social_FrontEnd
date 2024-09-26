import React, { useState } from "react";
import "./_SignInUpForm.scss";
import logoFemsenior from "../../../../public/images/logoFemsenior.svg";
import logoReversoSocial from "../../../../public/images/logoReversoSocial.svg";

const SignInUpForm = ({ defaultToSignUp = false }) => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(defaultToSignUp);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };
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

            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <input type="date" placeholder="Fecha de nacimiento" />
            <input type="password" placeholder="Contraseña" />
            <button>Entrar</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h2>Accede a tu cuenta</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <button>Entrar</button>
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
              <img src={logoReversoSocial}></img>
              <img src={logoFemsenior}></img>
              <button className="ghost" onClick={handleSignInClick} id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h3>Bienvenida a </h3>
			  <div>
              <img src={logoReversoSocial}></img>
              <img src={logoFemsenior}></img>
			  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInUpForm;
