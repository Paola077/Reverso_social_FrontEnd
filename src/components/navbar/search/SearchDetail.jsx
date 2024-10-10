import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EventCard from "../../cards/eventCard/EventCard";

const SearchDetail = () => {
  const { section, id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/${section}/${id}`
        );
        if (response.status === 404) {
          throw new Error("No encontrado");
        }
        setItem(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Error al cargar el evento");
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id, section]);

  if (loading) return <div>Cargando...</div>;
  if (error)
    return <div>{typeof error === "string" ? error : "Error desconocido"}</div>;
  if (!item) return <div>Evento no encontrado</div>;

  return (
    <EventCard
      id={item.id}
      title={item.title}
      modality={item.modality}
      time={item.time}
      location={item.location}
      description={item.description}
      buttonText={"Apúntate"}
      contentText={"Ubicación"}
      createdBy={item.creatorEmail}
    />
  );
};

export default SearchDetail;
