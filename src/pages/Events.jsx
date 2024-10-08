import React, { useEffect, useState, useContext } from "react";
import dayjs from "dayjs";
import EventCard from "../components/cards/eventCard/EventCard";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../services/eventApi";
import { DateContext } from "../context/DateContext";

function Events() {
  const { currentDate } = useContext(DateContext); 
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
      const startOfMonth = dayjs(currentDate).startOf("month").toDate();
      const endOfMonth = dayjs(currentDate).endOf("month").toDate();

      const eventsThisMonth = events.filter((event) => {
        const eventDate = new Date(event.date); 
        return eventDate >= startOfMonth && eventDate <= endOfMonth;
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
            entityType="evento"
          />
        ))
      )}
    </div>
  );
}

export default Events;
