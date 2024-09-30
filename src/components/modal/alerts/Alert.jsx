import { Button } from "../../buttons/button/Button";
import "./_Alert.scss";


const Alert = ({isOpen, onClose, alert}) => {

    if (!isOpen) return null; 

    return(
        <div className="overlay">
            <div className="alertBox">
                <button className="buttonExit" onClick={onClose}>
                    <img src="/icons/Exit.svg" alt="Cerrar formulario" />
                </button>
                <h3 className="alertText">
                    {alert} 
                </h3>
                <div className="buttonsBox">
                    <Button 
                    textButton={"Cancelar"}
                    backgroundColor={"white"}
                    width={"12.5rem"}
                    height={"2.75rem"}
                    border={"0.15rem solid #7176f8"}
                    color={"#7176f8"}/>
                    <Button 
                    textButton={"Aceptar"}
                    width={"12.5rem"}
                    height={"2.75rem"}
                    backgroundColor={"#7176f8"}
                    border={"0.15rem solid #7176f8"}
                    color={"white"}/>
                </div>
            </div>
        </div>
    )
}

export default Alert