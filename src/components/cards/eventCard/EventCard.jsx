import React, { useState } from "react";
import "./_EventCard.scss";
import ManifestButton from "../../buttons/manifestButton/ManifestButton";
import EventCardButton from "../../buttons/eventsCardButtons/EventCardButton";

const EventCard = ({ title, details, location, date, time }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected((prevState) => !prevState);
    console.log("Card selected:", !isSelected);
  };

  return (
   <div className="eventCard" onClick={handleCardClick}>
      <div
        className={`eventCard__lateralButtons ${isSelected ? "show" : "hide"}`}
      >
        <EventCardButton />
      </div>
      <div className="eventCard__content">
        <div className="eventCard__content__info">
          <h3 className="eventCard__content__info__title">{title}</h3>
          <div className="eventCard__content__info__details">
            <span>{location}</span>
            <span>Fecha: {date}</span>
            <span>Hora: {time}</span>
            <span>Ubicación: {details}</span>
          </div>
        </div>
        <div className="eventCard__content__button">
          <ManifestButton />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
