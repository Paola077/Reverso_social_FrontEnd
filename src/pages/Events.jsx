import React, { useEffect, useState, useContext } from "react";
import dayjs from "dayjs";
import InfoCard from "../components/cards/infoCard/InfoCard";
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
      const today = new Date();

      const eventsThisMonth = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= startOfMonth && eventDate <= endOfMonth;
      });

      const sortedEvents = eventsThisMonth.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        const isPastA = dateA < today;
        const isPastB = dateB < today;

        if (isPastA && !isPastB) return 1;
        if (!isPastA && isPastB) return -1;
        return dateA - dateB;
      });

      setFilteredEvents(sortedEvents);
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
          <InfoCard
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
            sector={event.sector}
          />
        ))
      )}
    </div>
  );
}

export default Events;
