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
