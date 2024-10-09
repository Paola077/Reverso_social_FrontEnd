import React from "react";
import Alert from "../components/modal/alerts/Alert";
import { useQuery } from "@tanstack/react-query";
import { getAllResources } from "../services/resourceApi";
import EventCard from "../components/cards/eventCard/EventCard";

function Resources() {
  const {
    data: resources,
    status: resourcesStatus,
    error: resourcesError,
  } = useQuery({
    queryKey: ["resources"],
    queryFn: getAllResources,
  });
  return (
    <div>
      {resourcesStatus === "loading" || resourcesStatus === "pending" ? (
        <p>Cargando recursos...</p>
      ) : resourcesStatus === "error" ? (
        <p>{resourcesError?.response?.data?.mensage}</p>
      ) : resources.length === 0 ? (
        <p>No hay recursos.</p>
      ) : (
        resources.map((resource) => (
          
          <EventCard
            id={resource.id}
            key={resource.id}
            title={resource.title}
            description={resource.description}
            url={resource.url}
            contentText={"RECURSO"}
            entityType="recurso"
            createdBy={resource.creatorEmail}
          />
        ))
      )}
    </div>
  );
}
export default Resources;
