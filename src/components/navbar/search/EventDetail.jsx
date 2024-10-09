import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EventCard from "../../cards/eventCard/EventCard";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/events/${id}`
        );
        setEvent(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar el evento");
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!event) return <div>Evento no encontrado</div>;

  return (
    <EventCard
      id={event.id}
      title={event.title}
      modality={event.modality}
      date={event.date}
      time={event.time}
      location={event.location}
      description={event.description}
      buttonText={"Apúntate"}
      contentText={"Ubicación"}
      createdBy={event.creatorEmail}
    />
  );
};

export default EventDetail;
