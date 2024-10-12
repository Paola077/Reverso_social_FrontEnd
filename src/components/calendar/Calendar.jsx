import React, { useEffect, useState, useContext } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./_Calendar.scss"
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
            title: "O",
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

 useEffect(() => {
   const handleResize = () => {
     window.location.reload(); 
   };
   window.addEventListener("resize", handleResize);
   return () => {
     window.removeEventListener("resize", handleResize); 
   };
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
      // borderRadius: "50%",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // width: "0.8rem",
      // height: "0.8rem",
      fontSize: "0.8rem",
      cursor: "pointer",
      color: "#7176f8",
      // marginLeft: "0.25rem",
      width: window.innerWidth < 480 ? "1.5rem" : "0.8rem",
      height: window.innerWidth < 480 ? "1.5rem" : "0.8rem",
      borderRadius: window.innerWidth < 480 ? "10%" : "50%",
      marginLeft: window.innerWidth < 480 ? "0.1" : "0.25rem",
      marginTop: window.innerWidth < 480 ? "-0.5rem" : "",
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
      className="calendarContainer"
      style={{
        width: "40%",
        // height: "auto",
        // margin: "0 auto",
        width: window.innerWidth < 480 ? "13rem" : "40%",
        height: window.innerWidth < 480 ? "1.25rem" : "auto",
        margin: window.innerWidth < 480 ? "1rem" : "1rem",
        marginTop: window.innerWidth < 480 ? "3rem" : "",
        // border: window.innerWidth < 480 ? "1px solid black" : "none",
        display: window.innerWidth < 480 ? "flex" : "block",
        justifyContent: window.innerWidth < 480 ? "center" : "initial",
        alignItems: window.innerWidth < 480 ? "center" : "initial",
      }}
    >
      {renderToolbar()}
      <Calendar
        className="calendarStyle"
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
