import React, { useEffect, useState, useContext } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  format,
  parse,
  startOfWeek,
  getDay,
  addMonths,
  subMonths,
} from "date-fns";
import { es } from "date-fns/locale";
import { getAllEvents } from "../../services/eventApi";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import InteractivePop from "../modal/Interactive/InteractivePop";
import  {DateContext}  from "../../context/DateContext";

const locales = { es: es };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: es }),
  getDay,
  locales,
});

const MonthlyCalendar = () => {
  const { currentDate, setCurrentDate } = useContext(DateContext); // Usamos el contexto
  const [events, setEvents] = useState([]);
  const { isAuthenticated, role, user } = useAuth();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({});
  const pathLocation = useLocation();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventData = await getAllEvents();
        const formattedEvents = eventData.map((event) => {
          const startDate = new Date(`${event.date}T${event.time}`);

          return {
            title: ".",
            start: startDate,
            end: startDate,
            eventData: event,
          };
        });

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const goToNextMonth = () => {
    const newDate = addMonths(currentDate, 1);
    setCurrentDate(newDate); 
  };

  const goToPreviousMonth = () => {
    const newDate = subMonths(currentDate, 1);
    setCurrentDate(newDate);
  };

  const renderToolbar = () => {
    const monthLabel = format(currentDate, "MMMM", { locale: es });
    return (
      <div
        className="custom-toolbar"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
          color: "#35399b",
        }}
      >
        <button
          onClick={goToPreviousMonth}
          style={{
            fontSize: "1.5rem",
            marginRight: "1.25rem",
            border: "none",
            background: "none",
            cursor: "pointer",
            color: "#7176f8"
          }}
        >
          {"<"}
        </button>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {monthLabel}
        </span>
        <button
          onClick={goToNextMonth}
          style={{
            fontSize: "1.5rem",
            marginLeft: "1.25rem",
            border: "none",
            background: "none",
            cursor: "pointer",
            color: "#7176f8"
          }}
        >
          {">"}
        </button>
      </div>
    );
  };

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: "#7176f8",
      borderRadius: "50%",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "0.8rem",
      height: "0.8rem",
      fontSize: "0.8rem",
      cursor: "pointer",
      color:"#7176f8",
    };
    return { style };
  };

  const handlePopupOpen = (event) => {
    if (isAuthenticated || pathLocation.pathname.includes("/eventos")) {
      setPopupOpen(true);
      setPopupData(event.eventData);
    } else {
      setAlertOpen(true);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div
      style={{
        width: "28rem",
        height: "22rem",
        margin: "0 auto",
      }}
    >
      {renderToolbar()}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={currentDate}
        onNavigate={setCurrentDate} 
        toolbar={false}
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          color: "#35399b",
        }}
        messages={{
          noEventsInRange: "No hay eventos en este rango",
        }}
        components={{
          month: {
            header: () => null,
          },
          event: ({ event }) => (
            <div
              title={event.eventData?.title || "Evento"}
              onClick={() => handlePopupOpen(event)}
            >
              {event.title}
            </div>
          ),
        }}
        eventPropGetter={eventStyleGetter}
      />
      <InteractivePop
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title={popupData.title}
        modality={popupData.modality}
        date={popupData.date}
        time={popupData.time}
        location={popupData.location}
        type={popupData.type}
        position={popupData.position}
        email={popupData.email}
        phoneNumber={popupData.phoneNumber}
        name={popupData.name}
        description={popupData.description}
        buttonText={popupData.buttonText || "Apúntate"}
        contentText={popupData.contentText}
      />
    </div>
  );
};

export default MonthlyCalendar;
