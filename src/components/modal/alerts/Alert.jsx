import "./_Alert.scss";

const Alert = ({ isOpen, onclose, alert, children }) => {
  if (!isOpen) return null;
  return (
    <div className="overlay">
      <div className="alertBox">
        <button className="buttonExit" onClick={onclose}>
          <img src="/icons/Exit.svg" alt="Cerrar formulario" />
        </button>
        <h3 className="alertText">{alert}</h3>
        <div className="buttonsBox">{children}</div>
      </div>
    </div>
  );
};

export default Alert;
