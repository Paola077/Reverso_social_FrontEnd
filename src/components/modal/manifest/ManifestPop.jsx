import { Button } from "../../buttons/button/Button";
import "./_ManifestPop.scss";
import closeIcon from "/src/components/modal/Exit.svg";
// import React, { useEffect } from "react";

const ManifestPop = ({
  isOpen,
  onClose,
  title,
  bodyTexts,
  buttonText,
  onButtonClick,
}) => {

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = 'hidden'; // Deshabilitar scroll en el body
  //   } else {
  //     document.body.style.overflow = 'auto'; // Restaurar scroll cuando el modal se cierra
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto'; // Asegurarse de restaurar scroll al desmontar
  //   };
  // }, [isOpen]);
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
              width="19rem"
              height="3rem"
              color="white"
              margin="1.5rem"
              onClick={onButtonClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManifestPop;
