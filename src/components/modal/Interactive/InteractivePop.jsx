import React from "react";
import { Button } from "../../buttons/button/Button";
import closeIcon from "/src/components/modal/Exit.svg";
import "../Interactive/_InteractivePop.scss";
import { useLocation } from 'react-router-dom';

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
  user_id,
  contentText,
}) => {
  if (!isOpen) return null;

  const { pathname } = useLocation();

  const currentPage = pathname.includes("evento") ? "EVENTOS" : 
  pathname.includes("servicio") ? "SERVICIOS" : 
  pathname.includes("curriculum") ? "EMPLEO" : 
  pathname.includes("recurso") ? "RECURSOS" : 
  "";

  if (!isOpen) return null;

  const renderContactSection = () => (
    <div className="contentContact">
      <p className="contentText">
        <strong>{contentText}</strong>
      </p>
      {user_id && (
        <div className="popUpContenContact">
          <p>{user_id}</p>
        </div>
      )}
      {phoneNumber && (
        <div className="popUpContenContact">
          <p>Tel: {phoneNumber}</p>
        </div>
      )}
      {email && (
        <div className="popUpContenContact">
          <p>{email}</p>
        </div>
      )}
    </div>
  );

  const renderButton = () => (
    <Button
      className="contentButton"
      textButton={buttonText}
      backgroundColor="#7176F8"
      border="none"
      width="13rem"
      height="3rem"
      color="white"
      margin="2rem 0 0 0"
      onClick={onButtonClick}
    />
  );

  const renderContentText = () => (
    <div className="employmentSection">
      {contentText && (
        <div className="popUpContentText">
          <p>{contentText}</p>
        </div>
      )}
    </div>
  );

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
          </div>
          {currentPage === "EVENTOS" && (date || time) && (
            <div className="dateAndTime">
              {date && <p className="popUpDate">{date}</p>}
              {time && <p className="popUpTime">{time}</p>}
            </div>
          )}
        </div>
        {position && (
          <div className="popUpPosition">
            <strong>{position}</strong>
          </div>
        )}
        <div className="popUpContentBody">
          {type && (
            <div className="PopUpType">
              <p className="popUpTypeText">
                <strong>{type}</strong>
              </p>
            </div>
          )}
          {description && (
            <p className="popUpContentBodyText">{description}</p>
          )}
        </div>
        <div className="ContentLocation">
          {location && (
            <>
              <p className="popUpLocationTitle">
                <strong>UBICACIÓN</strong>
              </p>
              <p className="popUpLocationValue">{location}</p>
            </>
          )}
        </div>
        <div className="popUpButton">
          {currentPage === "SERVICIOS" && renderContactSection()}
          {currentPage === "EMPLEO" && (
            <>
              {renderContentText()}
              {buttonText && renderButton()}
            </>
          )}
          {currentPage === "RECURSOS" && (
            <>
              {renderContentText()}
              {buttonText && renderButton()}
            </>
          )}
          {currentPage === "EVENTOS" && buttonText && renderButton()}
        </div>
      </div>
    </div>
  );
};  


export default InteractivePop;
