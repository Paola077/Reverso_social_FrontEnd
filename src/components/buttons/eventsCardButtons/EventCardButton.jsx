import "./_EventCardButton.scss";
import editIcon from "../../../../public/icons/Edit.svg";
import deleteIcon from "../../../../public/icons/Delete.svg";
import { deleteEvent } from "../../../services/eventApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Alert from "../../modal/alerts/Alert";
import { Button } from "../button/Button";
import { useEffect } from "react";

const EventCardButton = ({ id }) => {
  const queryClient = useQueryClient();
  const [error, setError] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const { token } = useAuth();

  const mutationDeleteEvent = useMutation({
    mutationFn: (id) => deleteEvent(id, token),
    onSuccess: () => {
      setIsConfirmationOpen(false);
      setIsSuccessOpen(true);
      queryClient.invalidateQueries("events");
    },
    onError: (error) => {
      console.log("Error al eliminar: ", error);
      setError(error?.response?.data);
    },
  });

  const handleDelete = () => {
    mutationDeleteEvent.mutate(id);
  };

  return (
    <>
      <div className="tabButtonContainer">
        <button className="tabButtonContainer__editButton">
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
          alert="¿Quieres eliminar este evento?"
          isOpen={isConfirmationOpen}
          onclose={() => setIsConfirmationOpen(false)}
        >
          <Button
            textButton={"Cancelar"}
            backgroundColor={"white"}
            width={"12.5rem"}
            height={"2.75rem"}
            border={"0.15rem solid #7176f8"}
            color={"#7176f8"}
            onClick={() => setIsConfirmationOpen(false)}
          />
          <Button
            textButton={"Aceptar"}
            width={"12.5rem"}
            height={"2.75rem"}
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
          alert="¡El evento ha sido eliminado!"
          isOpen={isSuccessOpen}
          onClose={() => setIsSuccessOpen(false)}
        >
          <Button
            textButton={"Aceptar"}
            width={"12.5rem"}
            height={"2.75rem"}
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
          onClose={() => setError(null)}
        >
          <Button
            textButton={"Aceptar"}
            width={"12.5rem"}
            height={"2.75rem"}
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
