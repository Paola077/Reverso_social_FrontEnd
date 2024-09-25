import "./_Collaborate.scss";
import { RequestButton } from "../../buttons/requestButton/RequestsButton";

const Collaborate = () => {
  return (
    <>
      <div className="container">
        <div className="container__contact">
          <h3 className="container__contact__title">¿Nos ayudas?</h3>
          <RequestButton
            className="container__contact__button"
            text="CONTACTA CON NOSOTRAS"
            width="18rem"
            height="50px"
            fontSize="18px"
            marginRight="5px"
          />
        </div>
        <div className="container__image">
          <img
            className="container__image__collaborateWomen"
            src="src/components/sections/collaborate/collaborate.jpg"
            alt="collaborateWoman"
          />
        </div>
      </div>
    </>
  );
};

export default Collaborate;
