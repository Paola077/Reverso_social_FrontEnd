import React, { useState } from "react";
import "./_SignInUpForm.scss";
import logoReversoWhite from "../../../../public/images/logoReversoWhite.png"
import FSLogoWhite from "../../../../public/images/FSLogoWhite.png"


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
			<input type="text" placeholder="Apellido" />
			
            <input type="email" placeholder="Email" />
			<input type="text" placeholder="Nombre de usuario" />
            <input type="date" placeholder="Fecha de nacimiento" />
            <input type="password" placeholder="Contraseña" />
			<button className="ghost" onClick={handleSignInClick} id="signIn">
                Sign In
              </button>
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
