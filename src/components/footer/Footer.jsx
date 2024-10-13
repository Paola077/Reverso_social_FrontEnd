import React from "react";
import { useNavigate } from "react-router-dom";
import "./_Footer.scss";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { RequestButton } from "../buttons/requestButton/RequestsButton";


export const Footer = () =>{
    const buttonWidth = window.innerWidth < 420 ? "10rem" : "19rem"; 
    const buttonHeight = window.innerWidth < 420 ? "1.7rem" : "2.2rem"; 
    const buttonFontSize = window.innerWidth < 420 ? "0.6rem" : "0.9rem";

    const navigate = useNavigate();
    
    const handleClick1 =  ()=> {
        window.open('https://www.instagram.com/')
    }
    const handleClick2 =  ()=> {
        window.open('https://www.facebook.com/')
    }
return(
    <footer>
        <div className="footerBox">
            <div className="footerText">
                <p className="footerTitle">Reverso Social</p>
                <div className="footerParagrafs">
                {/* <p>Diercción: </p>
                <p>Teléfono: </p> */}
                <p>Correo electrónico: reverso.social.igualdad@gmail.com</p>
                </div>
            </div>
            <div className="footerSocials">
                <RequestButton 
                    text={"FORMULARIO DE PETICIONES"} 
                    width={buttonWidth} 
                    height={buttonHeight}
                    marginRight={"1.5rem"} 
                    fontSize={buttonFontSize}
                    color={"#090d6d"}
                    onClick={()=> navigate("formulario/peticiones")}/>
                <BsFacebook className="footerFb" onClick={handleClick2}/>
                <BiLogoInstagramAlt  className="footerIg" onClick={handleClick1}/>
            </div>
        </div>

</footer>

)
}