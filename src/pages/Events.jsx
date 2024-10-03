import React from "react";
import EventCard from "../components/cards/eventCard/EventCard";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../services/eventApi";

function Events() {
  const {
    data: events,
    status: eventsStatus,
    error: eventsError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });
  return (
    <div>
      {eventsStatus === "loading" || eventsStatus === "pending" ? (
        <p>Cargando eventos...</p>
      ) : eventsStatus === "error" ? (
        <p>{eventsError?.response?.data?.message}</p>
      ) : (
        events?.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            time={event.time}
            details={event.location}
          />
        ))
      )}
    </div>
  );
}

export default Events;
