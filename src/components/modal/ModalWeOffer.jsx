import './_ModalWeOffer.scss';
import closeIcon from '/src/components/modal/Exit.svg';

import React from 'react'

const ModalWeOffer = ({ isOpen, onClose, title, text, imageUrl }) => {
  if (!isOpen) return null; 

  return (
    <div className="modalOfferOverlay">
      <div className="modalOfferContent">
        <button className="modalOfferClose" onClick={onClose}>
        <img src={closeIcon} alt="Cerrar" className="closeIcon" />
        </button>
        <h3 className="modalOfferTitle">{title}</h3>
        <div className="modalOfferBody">
          <div className="modalOfferText" dangerouslySetInnerHTML={{ __html: text }}>
            {/* <p >{text}</p> */}
          </div>
          <div className="modalOfferImage">
            <img src={imageUrl} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWeOffer;