import React from "react";
import "./_Intro.scss";

const Intro = () => {
  return (
   
    <div className="intro">
      <h1 className="introTitle">REVERSO SOCIAL</h1>
      <h2 className="introSubTitle">NUESTRO PROYECTO</h2>
      <p className="textIntro">
        Eliminar toda forma de discriminación por sexo, género, orientación
        sexual, procedencia, religión o condición social. 
        <br />Para ello, promovemos: 
      </p>
      <ul className="introList">
        <li>
        <span className="bold">Igualdad en el trabajo:</span> Eliminación de la segregación y brechas
          salariales.
        </li>
        <li>
        <span className="bold">Derechos laborales y servicios accesibles:</span> Empleos dignos,seguros y
          equitativos.{" "}
        </li>
        <li>
        <span className="bold">Erradicación de la violencia de género:</span> Lucha contra la violencia
          hacia mujeres y niñas.{" "}
        </li>
        <li>
          {" "}
          <span className="bold"> Participación femenina:</span>Promoción de liderazgo y decisiones políticas
          para mujeres.
        </li>
        <li>
        <span className="bold"> Empoderamiento:</span> Acceso a tecnología, derechos reproductivos y
          valorización del trabajo doméstico.
        </li>
      </ul>
    <div>
      <p className="textIntroFinal"><span className="bold">Fomentamos la igualdad y justicia social en todos los ámbitos.</span></p>
      </div>
      
    </div>

  );
};

export default Intro;
