import { Button } from "../../buttons/button/Button";
import "./_ManifestPop.scss";
import closeIcon from "/src/components/modal/Exit.svg";
import React from "react";

const ManifestPop = ({
  isOpen,
  onClose,
  title,
  bodyTexts,
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
            {bodyTexts.map((text, index) => (
              <p
                key={index}
                className="popUpWindow__content__body__text"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
            <Button
              className="popUpWindow__content__body__joinButton"
              textButton={buttonText}
              backgroundColor="#7176F8"
              border="none"
              width="15rem"
              color="white"
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManifestPop;
