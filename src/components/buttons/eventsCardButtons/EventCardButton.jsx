import "./_EventCardButton.scss";
import editIcon from "../../../../public/icons/Edit.svg";
import deleteIcon from "../../../../public/icons/Delete.svg";

const EventCardButton = () => {
  return (
    <>
      <div className="buttonContainer">
        <div className="buttonContainer__editButton">
          <img
            className="buttonContainer__editButton__editIcon"
            src={editIcon}
            alt="Editar"
          />
        </div>
        <div className="buttonContainer__separator"></div>
        <div className="buttonContainer__deleteButton">
          <img
            className="buttonContainer__deleteButton__deleteIcon"
            src={deleteIcon}
            alt="Eliminar"
          />
        </div>
      </div>
    </>
  );
};

export default EventCardButton;
