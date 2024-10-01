import React, { useState } from "react";
import "./_Intro.scss";
import { Button } from "../buttons/button/Button";
import ManifestPop from "../modal/manifest/ManifestPop";

const Intro = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
  const handdleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="intro">
      <h1 className="introTitle">REVERSO SOCIAL</h1>
      <h2 className="introSubTitle">NUESTRO PROYECTO</h2>
      <p className="textIntro">
        Eliminar toda forma de discriminación por sexo, género, orientación
        sexual, procedencia, religión o condición social.
        <br />
        Para ello, promovemos:
      </p>
      <ul className="introList">
        <li>
          <span className="bold">Igualdad en el trabajo:</span> Eliminación de
          la segregación y brechas salariales.
        </li>
        <li>
          <span className="bold">
            Derechos laborales y servicios accesibles:
          </span>{" "}
          Empleos dignos,seguros y equitativos.{" "}
        </li>
        <li>
          <span className="bold">Erradicación de la violencia de género:</span>{" "}
          Lucha contra la violencia hacia mujeres y niñas.{" "}
        </li>
        <li>
          {" "}
          <span className="bold"> Participación femenina:</span>Promoción de
          liderazgo y decisiones políticas para mujeres.
        </li>
        <li>
          <span className="bold"> Empoderamiento:</span> Acceso a tecnología,
          derechos reproductivos y valorización del trabajo doméstico.
        </li>
      </ul>
      <div>
        <p className="textIntroFinal">
          <span className="bold">
            Fomentamos la igualdad y justicia social en todos los ámbitos.
          </span>
        </p>
      </div>
      <div className="buttonContainer">
        <Button
          textButton="Saber más"
          backgroundColor="#35399B"
          border="none"
          width="12rem"
          height="3rem"
          margin={"3rem 0 0"}
          color="white"
          boxShadow="0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.25)"
          onClick={handleOpenPopup}
        />
      </div>
      <ManifestPop
        isOpen={isPopupOpen}
        onClose={handdleClosePopup}
        title="MANIFIESTO"
        bodyTexts={[
          "Luego vamos a cambiar el texto esto es un borrador que alguien me pase el texto verdadero please.",
          "Esto no es ninguna broma no sé que poner no me autocompleta el Lorem Ipsum, todo fatal.",
          "Por favor empatiza un poco más con mi sufrimiento para esto no hay justicia, que revés, ¿lo pillas? revés.",
        ]}
        buttonText="Únete a la comunidad"
      />
    </div>
  );
};

export default Intro;
