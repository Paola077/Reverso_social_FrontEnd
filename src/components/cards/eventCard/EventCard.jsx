import React, { useState, useContext } from "react";
import "./_EventCard.scss";
import EventCardButton from "../../buttons/eventsCardButtons/EventCardButton";
import { Button } from "../../buttons/button/Button";
import Alert from "../../modal/alerts/Alert";
import { useAuth } from "../../../context/AuthContext";
import InteractivePop from "../../modal/Interactive/InteractivePop";
import { useLocation, useNavigate } from "react-router-dom";

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
  entityType, sector
}) => {
  const { isAuthenticated, role, user } = useAuth();
  const [alertOpenForMoreInfo, setAlertOpenForMoreInfo] = useState(false);
  const [alertOpenForRegistration, setAlertOpenForRegistration] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isAttending, setIsAttending] = useState(false);
  const pathLocation = useLocation();
  const navigate = useNavigate();
  const createdByUser = user?.email === createdBy;
  console.log("Usuario autenticado:", user?.email);
  console.log("Creado por:", createdBy);
  console.log("¿Es el creador?", createdByUser);
  console.log(user);
  const handlePopupOpen = () => {

    if (isAuthenticated || pathLocation.pathname.includes('/eventos')) { 

      setPopupOpen(true);
    } else {
      setAlertOpenForMoreInfo(true); 
    }
  };

  const toggleAttendance = () => {
    if (isAuthenticated) {
      setIsAttending(!isAttending);
    } else {
      setAlertOpenForRegistration(true); 
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="eventCard">
      {isAuthenticated && (createdByUser || role === "ADMIN") && (
        <div className="eventCard__lateralButtons">
          <EventCardButton id={id} entityType={entityType} />
        </div>
      )}
      <div className="eventCard__content">
        <div className="eventCard__content__info">
          <h3 className="eventCard__content__info__title">{title}</h3>
            
          <div className="eventCard__content__info__details">
            {sector && <span>{sector}</span>}
            {location && <span>{location}</span>}
            {date && <span>Fecha: {date}</span>}
            {time && <span>Hora: {time}</span>}
            {details && <span>Ubicación: {details}</span>}
            {summary ? <span>{truncateText(summary, 20)}</span> : null}
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
          isOpen={alertOpenForMoreInfo}
          onclose={() => setAlertOpenForMoreInfo(false)}
        alert="Por favor, regístrate para acceder a más información"
      >
        <Button
          textButton={"Cancelar"}
          backgroundColor={"white"}
          width={"12.5rem"}
          height={"2.75rem"}
          border={"0.15rem solid #7176f8"}
          color={"#7176f8"}
          onClick={() => setAlertOpenForMoreInfo(false)}
        />
        <Button
          textButton={"Registrarse"}
          width={"12.5rem"}
          height={"2.75rem"}
          backgroundColor={"#7176f8"}
          border={"0.15rem solid #7176f8"}
          color={"white"}
          onClick={() => navigate("/reverso-social/login")}
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
        buttonText={!createdByUser ? (isAttending ? "Cancelar asistencia" : "Apúntate") : null}
        onButtonClick={toggleAttendance}
        contentText={contentText}
      />
      <Alert
        isOpen={alertOpenForRegistration}
        onclose={() => setAlertOpenForRegistration(false)}
        alert="Necesitas estar registrada para apuntarte."
      >
         <Button
          textButton={"Cancelar"}
          backgroundColor={"white"}
          width={"12.5rem"}
          height={"2.75rem"}
          border={"0.15rem solid #7176f8"}
          color={"#7176f8"}
          onClick={() => setAlertOpenForRegistration(false)}
        />
        <Button
          textButton={"Registrarse"}
          width={"12.5rem"}
          height={"2.75rem"}
          backgroundColor={"#7176f8"}
          border={"0.15rem solid #7176f8"}
          color={"white"}
          onClick={() => navigate("/reverso-social/login")} 
        />
      </Alert>
    </div>
  );
};

export default EventCard;
