import React, {useState} from "react";
import './_ManifestButton.scss';
import ManifestPop from '../../modal/manifest/ManifestPop';


const ManifestButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const title = "Manifiesto";
  const bodyTexts = [ <span key="1"><strong>Las mujeres de 50 años o más nos enfrentamos diariamente a estereotipos y prejuicios sociales asociados con la edad.</strong> Desde <strong>FEMsenior</strong> queremos, mediante la acción, <strong>cambiar la narrativa y mostrar la edad como una fuente de poder </strong> en lugar de una limitación.</span>,
    <span key="2">Para ello, es importante <strong> reconocer y celebrar las fortalezas únicas que nos ha ofrecido el tiempo </strong>: la experiencia acumulada, la sabiduría adquirida y la resiliencia desarrollada.
    Esas cualidades <strong> que nos hacen increíblemente fuertes.</strong> Es precisamente esa riqueza de conocimientos, autoconocimiento y experiencias las que nos permiten enfrentar cualquier desafío con confianza y determinación.  Es momento de empoderarse y abrazar esta etapa de la vida, y reconocer las oportunidades que se deriva de ella, y reclamar nuestro lugar en la sociedad y en el entorno laboral, y mostra a la sociedad el potencial de lo que excluye, a nosotras!!!. </span>,
    <span key="3"> Si sientes que esto es así y que tienes mucho que dar y aportar a ti misma y a las demás, FEMsenior es para ti. </span>,
    <span key="4">Desde nuestra comunidad queremos analizar y enternder tu situación, reforzar tu confianza, visualizar contigo nuevos horizontes profesionales y hacerlos sentir</span>,
   
    <span key="5"><strong>¡¡No permitas que los estereotipos te limiten!! Únete a nosotras.</strong></span>,
    <span key="6">Entra a nuestra comunidad y empieza a mejorar y cambiar la sociedad con nostros, compartiendo y <strong>ayudando a otras mujeres y a ti misma</strong>.</span>
  ];
  const buttonText = "Únete a la comunidad";

  return (
    <div className="manifestBtnContainer">
      <button className="manifestBtn" onClick={handleOpenPopup}>
        Saber más
      </button>
      <ManifestPop
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title={title}
        bodyTexts={bodyTexts}
        buttonText={buttonText}
        onButtonClick={() => {
          console.log("Botón de unirse clicado");
        }}
      />
    </div>
  );
};

export default ManifestButton;
