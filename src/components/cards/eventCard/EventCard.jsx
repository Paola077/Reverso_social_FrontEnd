import React, { useState, useContext, useEffect } from "react";
import "./_EventCard.scss";
import EventCardButton from "../../buttons/eventsCardButtons/EventCardButton";
import { Button } from "../../buttons/button/Button";
import Alert from "../../modal/alerts/Alert";
import { useAuth } from "../../../context/AuthContext";
import InteractivePop from "../../modal/Interactive/InteractivePop";
import { useLocation } from "react-router-dom";

const truncateText = (text, limit) => {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

const EventCard = ({
  title,
  details,
  location,
  date,
  time,
  summary,
  createdBy,
  modality,
  type,
  position,
  email,
  phoneNumber,
  description,
  contentText,
  buttonText,
  name,
  id,
}) => {
  const { isAuthenticated, role, user } = useAuth();
  const [alertOpen, setAlertOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const pathLocation = useLocation();

  const createdByUser = user?.email === createdBy;

  // Verificación de si el evento ya ha pasado
  const eventDate = new Date(date);
  const isPastEvent = eventDate < new Date();

  const handlePopupOpen = () => {
    if (isAuthenticated || pathLocation.pathname.includes("/eventos")) {
      setPopupOpen(true);
    } else {
      setAlertOpen(true);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="eventCard">
      {isAuthenticated && createdByUser && (
        <div className="eventCard__lateralButtons">
          <EventCardButton id={id} />
        </div>
      )}
      <div className="eventCard__content">
        <div className="eventCard__content__info">
          <h3 className="eventCard__content__info__title">{title}</h3>
          <div className="eventCard__content__info__details">
            {location && <span>{location}</span>}
            {date && <span>Fecha: {date}</span>}
            {time && <span>Hora: {time}</span>}
            {details && <span>Ubicación: {details}</span>}
            {summary ? <span>{truncateText(summary, 20)}</span> : null}
          </div>
        </div>
        <div className="eventCard__content__button">
          {isPastEvent ? (
            <span className="pastEvent">
              Finalizado
            </span>
          ) : (
            <Button
              textButton={"Ver"}
              backgroundColor={"white"}
              border={"none"}
              color={"black"}
              width={"8rem"}
              height={"2.5rem"}
              boxShadow={"0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.25)"}
              onClick={handlePopupOpen}
            />
          )}
        </div>
      </div>
      <Alert
        isOpen={alertOpen}
        onclose={() => setAlertOpen(false)}
        alert="Por favor, regístrate para acceder a más información"
      >
        <Button
          textButton={"Cancelar"}
          backgroundColor={"white"}
          width={"12.5rem"}
          height={"2.75rem"}
          border={"0.15rem solid #7176f8"}
          color={"#7176f8"}
          onClick={() => setAlertOpen(false)}
        />
        <Button
          textButton={"Registrarse"}
          width={"12.5rem"}
          height={"2.75rem"}
          backgroundColor={"#7176f8"}
          border={"0.15rem solid #7176f8"}
          color={"white"}
        />
      </Alert>
      <InteractivePop
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title={title}
        modality={modality}
        date={date}
        time={time}
        location={location}
        type={type}
        position={position}
        email={email}
        phoneNumber={phoneNumber}
        name={name}
        description={description}
        buttonText={buttonText}
        contentText={contentText}
      />
    </div>
  );
};

export default EventCard;
