import React from "react";
import { Button } from "../../buttons/button/Button";
import closeIcon from "/src/components/modal/Exit.svg";
import "../Interactive/_InteractivePop.scss";

const InteractivePop = ({
  isOpen,
  onClose,
  title,
  titleSection,
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
      width="16rem"
      color="white"
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
        <h2 className="popUpContentTitle">{titleSection}</h2>
        <h3 className="titlePopUp">{title}</h3>
        {position && (
          <div className="popUpPosition">
            <strong>{position}</strong>
          </div>
        )}
        <div className="popUpContentBody">
          {modality && <p className="popUpModality">{modality}</p>}
          {type && (
            <div className="PopUpType">
              <p className="popUpTypeText">
                <strong>{type}</strong>
              </p>
              
            </div>
          )}
          {(description || []).map((text, index) => (
            <p key={index} className="popUpContentBodyText">
              {text}
            </p>
          ))}
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
          {titleSection === "SERVICIOS" && renderContactSection()}
          {titleSection === "EMPLEO" && (
            <>
              {renderContentText()}
              {buttonText && renderButton()}
            </>
          )}
          {titleSection === "RECURSOS" && (
            <>
              {renderContentText()}
              {buttonText && renderButton()}
            </>
          )}
          {titleSection === "EVENTOS" && buttonText && renderButton()}
        </div>
      </div>
    </div>
  );
};


export default InteractivePop;
