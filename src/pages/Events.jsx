import React from "react";
import EventCard from "../components/cards/eventCard/EventCard";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../services/eventApi";
import dayjs from "dayjs"; 

function Events() {
  const {
    data: events,
    status: eventsStatus,
    error: eventsError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });

  const currentMonth = dayjs().month();
  const currentYear = dayjs().year();

  // Filtrar eventos por mes actual
  const eventsThisMonth = events?.filter((event) => {
    const eventDate = dayjs(event.date); 
    return (
      eventDate.month() === currentMonth && eventDate.year() === currentYear
    );
  });

  return (
    <div>
      {eventsStatus === "loading" || eventsStatus === "pending" ? (
        <p>Cargando eventos...</p>
      ) : eventsStatus === "error" ? (
        <p>{eventsError?.response?.data?.message}</p>
      ) : eventsThisMonth.length === 0 ? (
        <p>No hay eventos para este mes.</p>
      ) : (
        eventsThisMonth.map((event) => (
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
