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
        A través de instituciones nuestro propósito es eliminar toda forma de discriminación por sexo, género, orientación
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
          "Nos dirigimos a <strong>CARGOS POLÍTICOS Y SINDICALES, ADMINISTRACIÓN PUBLICA, EMPRESAS PRIVADAS, SOCIEDADES, ETC.</strong>",
          "Queremos un <strong>cambio estructural dentro de todas las instituciones</strong>, que elimine todas las formas de discriminación por sexo, género, orientación sexual, procedencia, religión o clase social.",
          "Nos comprometemos a erradicar la violencia de género en todos los ámbitos, <strong>luchar contra la explotación sexual y todas las formas de violencia hacia mujeres y niñas.</strong>",
          "Fomentamos la participación plena de las mujeres en la vida política, económica y pública, asegurando la igualdad de oportunidades. Defendemos el <strong>acceso universal a la salud sexual y reproductiva, y los derechos reproductivos de las mujeres.</strong>",
          "Queremos romper con la brecha digital, promoviendo el uso de tecnología para el empoderamiento de las mujeres.",
          "Apoyamos la profesionalización del trabajo doméstico y la valorización de los cuidados, <strong>promoviendo la igualdad de responsabilidades en el hogar</strong>. Luchamos por un entorno de trabajo seguro, equitativo y accesible, donde la igualdad de remuneración sea una realidad.",
          "Nos comprometemos a fomentar una educación que prevenga las violencias machistas y construya una <strong>sociedad inclusiva y respetuosa con la diversidad.</strong>",
        ]}
        buttonText="Únete a la comunidad"
      />
    </div>
  );
};

export default Intro;
