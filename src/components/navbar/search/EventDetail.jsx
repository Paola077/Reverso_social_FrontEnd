import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Fecha: {event.date}</p>
      <p>Hora: {event.time}</p>
      <p>Modalidad: {event.modality}</p>
      <p>Locación: {event.location}</p>
      <p>Número máximo de participantes: {event.maxParticipants}</p>
      <p>Sector: {event.sector}</p>
      <p>Creado por: {event.creatorEmail}</p>
    </div>
  );
};

export default EventDetail;
