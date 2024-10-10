import EventCard from "../components/cards/eventCard/EventCard";
import { useQuery } from "@tanstack/react-query";
import { getAllEmploys } from "../services/employApi";

function Employment() {
  const {
    data: employs,
    status: employsStatus,
    error: employsError,
  } = useQuery({
    queryKey: ["employs"],
    queryFn: getAllEmploys,
  });

  return (
    <div>
      {employsStatus === "loading" || employsStatus === "pending" ? (
        <p>Cargando empleos...</p>
      ) : employsStatus === "error" ? (
        <p>{employsError?.response?.data?.message}</p>
      ) : (
        employs.map((employ) => (
          <EventCard
            id={employ.id}
            key={employ.id}
            sector={employ.sector}
            title={employ.position}
            description={employ.description}
            summary={employ.description}
            createdBy={employ.creatorEmail}
            curriculum={employ.curriculumUrl}
            buttonText={"Descargar"}
            contentText={"Ver el CV"}
            entityType="curriculum"
          />
        ))
      )}
    </div>
  );
}

export default Employment;
