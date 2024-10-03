import "./_EventCardButton.scss";
import editIcon from "../../../../public/icons/Edit.svg";
import deleteIcon from "../../../../public/icons/Delete.svg";

const EventCardButton = () => {
  return (
    <>
      <div className="tabButtonContainer">
        <div className="tabButtonContainer__editButton">
          <img
            className="tabButtonContainer__editButton__editIcon"
            src={editIcon}
            alt="Editar"
          />
        </div>
        <div className="tabButtonContainer__separator"></div>
        <div className="tabButtonContainer__deleteButton">
          <img
            className="tabButtonContainer__deleteButton__deleteIcon"
            src={deleteIcon}
            alt="Eliminar"
          />
        </div>
      </div>
    </>
  );
};

export default EventCardButton;
