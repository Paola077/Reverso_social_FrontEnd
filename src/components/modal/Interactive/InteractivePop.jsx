import React from "react";
import { Button } from "../../buttons/button/Button";
import closeIcon from "/icons/Exit.svg";
import "../Interactive/_InteractivePop.scss";
import { useAuth } from "../../../context/AuthContext";
import { useLocation } from "react-router-dom";

const InteractivePop = ({
  isOpen,
  onClose,
  title,
  date,
  time,
  modality,
  location,
  description,
  position,
  type,
  email,
  phoneNumber,
  buttonText,
  onButtonClick,
  createdBy, // Recibiendo el email del creador
  participantsCount, // Número de participantes
  contentText,
  sector,
}) => {
  const { user } = useAuth(); // Obtener el usuario autenticado desde el contexto de autenticación

  // Comparar si el usuario autenticado es el creador del evento
  const isCreator = user?.email === createdBy;

  const { pathname } = useLocation();

  const currentPage = pathname.includes("evento")
    ? "EVENTOS"
    : pathname.includes("servicio")
    ? "SERVICIOS"
    : pathname.includes("empleo")
    ? "EMPLEO"
    : pathname.includes("recurso")
    ? "RECURSOS"
    : "";
  if (!isOpen) return null;

  return (
    <div className="popUpInteractive">
      <div className="popUpContent">
        <button className="popUpContentClose" onClick={onClose}>
          <img src={closeIcon} alt="Cerrar" className="popUpCloseIcon" />
        </button>
        <div className="titleAndDateContainer">
          <div>
            <h3 className="titlePopUp">{title}</h3>
            {modality && <p className="popUpModality">{modality}</p>}
            {sector && currentPage !== "EVENTOS" && (
              <p className="popUpModality">{sector}</p>
            )}
          </div>
          {date && <p className="popUpDate">{date}</p>}
          {time && <p className="popUpTime">{time}</p>}
        </div>

        <div className="popUpContentBody">
          {type && (
            <div className="PopUpType">
              <p className="popUpTypeText">
                <strong>{type}</strong>
              </p>
            </div>
          )}
          {description && <p className="popUpContentBodyText">{description}</p>}
        </div>

        <div className="popUpContactSection">
          {location && (
            <>
              <p>
                <strong>Ubicación:</strong> {location}
              </p>
            </>
          )}
          {phoneNumber && <p>Tel: {phoneNumber}</p>}
          {email && <p>Email: {email}</p>}
        </div>

        {isCreator && (
          <div className="participantsCount">
            <strong>Número de participantes inscritos:</strong>{" "}
            {participantsCount}
          </div>
        )}

        <div className="popUpButton">
          {buttonText && (
            <Button
              textButton={buttonText}
              backgroundColor="#7176F8"
              border="none"
              width="13rem"
              height="3rem"
              color="white"
              margin="2rem 0 0 0"
              onClick={onButtonClick}
            />
          {currentPage === "SERVICIOS" && renderContactSection()}
          {currentPage === "EMPLEO" && (
            <div className="buttonCurriculum">
              {renderContentText()}
              {buttonText && renderButton()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractivePop;
