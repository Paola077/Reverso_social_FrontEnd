import React, { useState, useEffect, useContext } from "react";
import "./_EventCard.scss";
import EventCardButton from "../../buttons/eventsCardButtons/EventCardButton";
import { Button } from "../../buttons/button/Button";
import Alert from "../../modal/alerts/Alert";
import { useAuth } from "../../../context/AuthContext";
import InteractivePop from "../../modal/Interactive/InteractivePop";
import { useLocation, useNavigate } from "react-router-dom";
import { subscribeUserToEvent, getEvent, unsubscribeUserToEvent } from "../../../services/eventApi";


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
  name,
  id,
  entityType,
  maxParticipants: propMaxParticipants,
  sector,
}) => {
  const { isAuthenticated, user, role, token } = useAuth();
  const [isAttending, setIsAttending] = useState(false);
  const [currentParticipants, setCurrentParticipants] = useState(0);
  const [maxParticipants, setMaxParticipants] = useState(0);
  const [isEventFull, setIsEventFull] = useState(false);
  const [alertOpenForMoreInfo, setAlertOpenForMoreInfo] = useState(false);
  const [alertOpenForRegistration, setAlertOpenForRegistration] = useState(false);
  const [alertConfirmation, setAlertConfirmation] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const pathLocation = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const createdByUser = user?.email === createdBy;

  useEffect(() => {
    const checkEventStatus = async () => {
      if (!id) return;
      try {
        const eventData = await getEvent(id, token);
        console.log("Datos completos del evento:", eventData);
    
        setIsEventFull(eventData.eventFull || false);
        setCurrentParticipants(eventData.currentParticipants || 0);
        setMaxParticipants(eventData.maxParticipants || propMaxParticipants || 0);
    
        if (isAuthenticated) {
          const isSubscribed = eventData.userSubscribed || false;
          setIsAttending(isSubscribed);
        } else {
          setIsAttending(false);
        }
      } catch (error) {
        console.error("Error al obtener el estado del evento:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    console.log("Ejecutando useEffect. Token:", token);
  
  
      checkEventStatus();
    
    
  }, [id, token]);
  const handleSubscribe = async () => {
    try {
      await subscribeUserToEvent(id, token);
      setIsAttending(true);
      const newParticipantCount = currentParticipants + 1;
      setCurrentParticipants(newParticipantCount);

      if (newParticipantCount >= maxParticipants) {
        setIsEventFull(true);
      }
      console.log("Número de participantes:", participantsCount);
      console.log("Máximo de participantes:", maxParticipants);

      setAlertConfirmation(true);
    } catch (error) {
      console.error("Error al suscribirse:", error);
      if (error.response?.status === 409) {
        setIsEventFull(true);
        alert("El evento ya ha alcanzado el aforo máximo.");
      }
    }
  };

  const handleUnsubscribe = async () => {
    try {
      await unsubscribeUserToEvent(id, token);
      setIsAttending(false);
      const newParticipantCount = currentParticipants - 1;
      setCurrentParticipants(newParticipantCount);
      setIsEventFull(false); // Actualiza el estado del evento
    } catch (error) {
      console.error("Error al cancelar la suscripción:", error);
    }
  };
  const handlePopupOpen = () => {
    if (isAuthenticated || pathLocation.pathname.includes("/eventos")) {
      setPopupOpen(true);
    } else {
      setAlertOpenForMoreInfo(true);
    }
  };

  const toggleAttendance = () => {
    if (!isAuthenticated) {
      setAlertOpenForRegistration(true);
    } else if (isEventFull && !isAttending) {
      alert("El evento ya ha alcanzado el aforo completo.");
    } else {
      isAttending ? handleUnsubscribe() : handleSubscribe();
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  console.log("isEventFull:", isEventFull);
console.log("isAttending:", isAttending);

let buttonText = null;
let onButtonClick = null;

if (!createdByUser) {
  if (isLoading) {
    buttonText = "Cargando...";
    onButtonClick = null;
  } else if (isEventFull && !isAttending) {
    buttonText = "Aforo Completo";
    onButtonClick = null;
  } else if (!isAuthenticated) {
    buttonText = "Apúntate";
    onButtonClick = () => {
      setAlertOpenForRegistration(true);
    };
  } else {
    buttonText = isAttending ? "Cancelar asistencia" : "Apúntate";
    onButtonClick = toggleAttendance;
  }
}
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

      {!createdByUser && (
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
          contentText={contentText}
          buttonText={buttonText}
          onButtonClick={onButtonClick}
        />
      )}

      <Alert
        isOpen={alertConfirmation}
        onclose={() => setAlertConfirmation(false)}
        alert="¡Te has apuntado al evento con éxito!"
      >
        <Button
          textButton={"Aceptar"}
          backgroundColor={"#7176f8"}
          width={"12.5rem"}
          height={"2.75rem"}
          color={"white"}
          onClick={() => setAlertConfirmation(false)}
        />
      </Alert>
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
