import "./_Collaborate.scss";
import { RequestButton } from "../../buttons/requestButton/RequestsButton";
import { useNavigate } from "react-router-dom";

const Collaborate = () => {
  const navigate = useNavigate();
  const buttonWidth = window.innerWidth < 420 ? "13rem" : "22rem"; 
  const buttonHeight = window.innerWidth < 420 ? "2rem" : "3.5rem"; 
  const buttonFontSize = window.innerWidth < 420 ? "0.8rem" : "1.125rem";
  return (
    <>
      <div className="container">
        <div className="container__contact">
          <h3 className="container__contact__title">¿Nos ayudas?</h3>
          <RequestButton
            className="container__contact__button"
            text="CONTACTA CON NOSOTRAS"
            width={buttonWidth} 
            height={buttonHeight}
            fontSize={buttonFontSize}
            marginRight="0.313rem"
            color="white"
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
