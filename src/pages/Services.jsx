import React from "react";
import { getAllServices } from "../services/servicesApi";
import { useQuery } from "@tanstack/react-query";
import InfoCard from "../components/cards/infoCard/InfoCard";

function Services() {
  const {
    data: services,
    status: servicesStatus,
    error: servicesError,
  } = useQuery({
    queryKey: ["service"],
    queryFn: getAllServices,
  });
  return (
    <div>
      {servicesStatus === "loading" || servicesStatus === "pending" ? (
        <p>Cargando servicios...</p>
      ) : servicesStatus === "error" ? (
        <p>{servicesError?.response?.data?.message}</p>
      ) : (
        services?.map((services) => (
          <InfoCard
            id={services.id}
            key={services.id}
            title={services.title}
            type={services.type}
            description={services.description}
            contentText={"Contacta conmigo:"}
            email={services.email}
            phone_number={services.phone_number}
            createdBy={services.creatorEmail}
            entityType="servicio"
          />
        ))
      )}
    </div>
  );
}

export default Services;
