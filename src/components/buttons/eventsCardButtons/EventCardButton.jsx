import "./_EventCardButton.scss";
import editIcon from "/icons/Edit.svg";
import deleteIcon from "/icons/Delete.svg";
import { deleteEvent } from "../../../services/eventApi";
import { deleteService } from "../../../services/servicesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Alert from "../../modal/alerts/Alert";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";
import { deleteEmployOffer } from "../../../services/employApi";
import { deleteResource } from "../../../services/resourceApi";

const EventCardButton = ({ id, entityType }) => {
  const queryClient = useQueryClient();
  const [error, setError] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  const deleteFunctionMap = {
    "evento": deleteEvent,
    "servicio": deleteService,
    "curriculum": deleteEmployOffer,
    "recurso": deleteResource,
  };

  const mutationDelete = useMutation({
    mutationFn: (id) => deleteFunctionMap[entityType](id, token),
    onSuccess: () => {
      setIsConfirmationOpen(false);
      setIsSuccessOpen(true);
      queryClient.invalidateQueries(entityType); 
    },
    onError: (error) => {
      console.log("Error al eliminar: ", error);
      setError(error?.response?.data);
    },
  });

  const handleDelete = () => {
    mutationDelete.mutate(id);
  };

  const buttonWidth = window.innerWidth < 480 ? "9rem" : "12.5rem";
  const buttonHeight = window.innerWidth < 480 ? "2rem" : "2.75rem";

  return (
    <>
      <div className="tabButtonContainer">
        <button className="tabButtonContainer__editButton" onClick={() => navigate(`/formulariofs/${entityType}/editar/${id}`)}>
          <img
            className="tabButtonContainer__editButton__editIcon"
            src={editIcon}
            alt="Editar"
          />
        </button>
        <div className="tabButtonContainer__separator"></div>
        <button
          className="tabButtonContainer__deleteButton"
          onClick={() => setIsConfirmationOpen(true)}
        >
          <img
            className="tabButtonContainer__deleteButton__deleteIcon"
            src={deleteIcon}
            alt="Eliminar"
          />
        </button>
      </div>

      {/* Modal de confirmación */}
      {isConfirmationOpen && (
        <Alert
          alert={`¿Quieres eliminar este ${entityType}?`}
          isOpen={isConfirmationOpen}
          onclose={() => setIsConfirmationOpen(false)}
        >
          <Button
            textButton={"Cancelar"}
            backgroundColor={"white"}
            width={buttonWidth}
            height={buttonHeight}
            border={"0.15rem solid #7176f8"}
            color={"#7176f8"}
            onClick={() => setIsConfirmationOpen(false)}
          />
          <Button
            textButton={"Aceptar"}
            width={buttonWidth}
            height={buttonHeight}
            backgroundColor={"#7176f8"}
            border={"0.15rem solid #7176f8"}
            color={"white"}
            onClick={handleDelete}
          />
        </Alert>
      )}

      {/* Modal de éxito */}
      {isSuccessOpen && (
        <Alert
          alert={`¡El ${entityType} ha sido eliminado!`}
          isOpen={isSuccessOpen}
          onclose={() => setIsSuccessOpen(false)}
        >
          <Button
            textButton={"Aceptar"}
            width={buttonWidth}
            height={buttonHeight}
            backgroundColor={"#7176f8"}
            border={"0.15rem solid #7176f8"}
            color={"white"}
            onClick={() => setIsSuccessOpen(false)}
          />
        </Alert>
      )}

      {/* Mostrar error si ocurre */}
      {error && (
        <Alert
          alert={`Error: ${error.message || "No se pudo eliminar el evento"}`}
          isOpen={!!error}
          onclose={() => setError(null)}
        >
          <Button
            textButton={"Aceptar"}
            width={buttonWidth}
            height={buttonHeight}
            backgroundColor={"#7176f8"}
            border={"0.15rem solid #7176f8"}
            color={"white"}
            onClick={() => setError(null)}
          />
        </Alert>
      )}
    </>
  );
};

export default EventCardButton;
