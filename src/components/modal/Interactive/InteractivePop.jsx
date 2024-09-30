import React from 'react'
import { Button } from "../../buttons/button/Button";
import closeIcon from "/src/components/modal/Exit.svg";
import "../Interactive/_InteractivePop.scss"

const InteractivePop = ({ isOpen,
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
  }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="popUpWindow">
        <div className="popUpWindow__content">
          <button className="popUpWindow__content__close" onClick={onClose}>
            <img
              src={closeIcon}
              alt="Cerrar"
              className="popUpWindow__content__close__icon"
            />
          </button>
          <h2 className="popUpWindow__content__title">{title}</h2>
          <div className="popUpWindow__content__body">
            {(description || []).map((text, index) => (
              <p key={index} className="popUpWindow__content__body__text">
                {text}
              </p>
            ))}
            <Button
              className="popUpWindow__content__body__joinButton"
              textButton={buttonText}
              backgroundColor="#7176F8"
              border="none"
              width="16rem"
              color="white"
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractivePop;