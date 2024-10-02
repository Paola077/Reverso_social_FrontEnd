import React, { useState, useContext } from "react";
import "./_EventCard.scss";
import EventCardButton from "../../buttons/eventsCardButtons/EventCardButton";
import { Button } from "../../buttons/button/Button";
import Alert from "../../modal/alerts/Alert";


const truncateText = (text, limit) => {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

const EventCard = ({ title, details, location, date, time, summary, role }) => {
//const { user, isRegistered } = useContext(AuthContext); // Obtener el usuario actual y su estado
  const [alertOpen, setAlertOpen] = useState(false); // Estado para manejar la alerta

  //const createdByUser = user && user.id === createdBy; // identificar si el usuario es el creador del evento

  
const handlePopupOpen = () =>{
  if (isRegistered) {
    console.log ("Abrir pop Up con info")
  } else {
    setAlertOpen(true);
  }
}

const closeAlert = () => {
  setAlertOpen(false);
};

  return (
    <div className="eventCard" >
      {/* {user?.role === "FemSenior" && createdByUser && ( */}
        <div className="eventCard__lateralButtons">
          <EventCardButton />
        </div>
      {/* )} */}
      <div className="eventCard__content">
        <div className="eventCard__content__info">
          <h3 className="eventCard__content__info__title">{title}</h3>
          <div className="eventCard__content__info__details">
          {location && <span>{location}</span>}
            {date && <span>Fecha: {date}</span>}
            {time && <span>Hora: {time}</span>}
            {details && <span>Ubicación: {details}</span>}
            <span>{truncateText(summary, 20)}</span>
          </div>
        </div>
        <div className="eventCard__content__button">
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
        </div>
      </div>
      <Alert 
        isOpen={alertOpen} 
        onClose={closeAlert} 
        alert="Por favor, regístrate para acceder a más información"
      />
    </div>
  );
};

export default EventCard;
