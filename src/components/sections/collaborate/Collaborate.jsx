import "./_Collaborate.scss";
import { RequestButton } from "../../buttons/requestButton/RequestsButton";
import { useNavigate } from "react-router-dom";

const Collaborate = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="container__contact">
          <h3 className="container__contact__title">¿Nos ayudas?</h3>
          <RequestButton
            className="container__contact__button"
            text="CONTACTA CON NOSOTRAS"
            width="22rem"
            height="3.5rem"
            fontSize="18px"
            marginRight="5px"
            onClick={ ()=> navigate("/formulario/colabora")}
          />
        </div>
        <div className="container__image">
          <img
            className="container__image__collaborateWomen"
            src="images\collaborate.jpg"
            alt="collaborateWoman"
          />
        </div>
      </div>
    </>
  );
};

export default Collaborate;
