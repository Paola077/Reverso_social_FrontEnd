import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import EventCard from "../components/cards/eventCard/EventCard";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../services/eventApi";
import { useOutletContext } from "react-router-dom"; 
function Events() {
  const { currentDate } = useOutletContext();
  const [filteredEvents, setFilteredEvents] = useState([]);

  const {
    data: events,
    status: eventsStatus,
    error: eventsError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });

  useEffect(() => {
    if (events && currentDate) {
      const currentMonth = dayjs(currentDate).month();
      const currentYear = dayjs(currentDate).year();

      const eventsThisMonth = events.filter((event) => {
        const eventDate = dayjs(event.date);
        return (
          eventDate.month() === currentMonth && eventDate.year() === currentYear
        );
      });

      setFilteredEvents(eventsThisMonth);
    }
  }, [events, currentDate]); 

  return (
    <div>
      {eventsStatus === "loading" || eventsStatus === "pending" ? (
        <p>Cargando eventos...</p>
      ) : eventsStatus === "error" ? (
        <p>{eventsError?.response?.data?.message}</p>
      ) : filteredEvents.length === 0 ? (
        <p>No hay eventos para este mes.</p>
      ) : (
        filteredEvents.map((event) => (
          <EventCard
            id={event.id}
            key={event.id}
            title={event.title}
            modality={event.modality}
            date={event.date}
            time={event.time}
            location={event.location}
            type={event.type}
            description={event.description}
            buttonText={"Apúntate"}
            contentText={"Ubicación"}
            createdBy={event.creatorEmail}
          />
        ))
      )}
    </div>
  );
}

export default Events;
