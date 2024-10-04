import React from "react";
import { useNavigate } from "react-router-dom";
import "./_Footer.scss";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { RequestButton } from "../buttons/requestButton/RequestsButton";


export const Footer = () =>{

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
                <p>Diercción: </p>
                <p>Teléfono: </p>
                <p>Correo electrónico:</p>
                </div>
            </div>
            <div className="footerSocials">
                <RequestButton 
                    text={"FORMULARIO DE PETICIONES"} 
                    width={"16rem"} 
                    height={"2rem"}
                    marginRight={"1.5rem"} 
                    fontSize={"0.8rem"}
                    color={"#090d6d"}
                    onClick={()=> navigate("formulario/peticiones")}/>
                <BsFacebook className="footerFb" onClick={handleClick2}/>
                <BiLogoInstagramAlt  className="footerIg" onClick={handleClick1}/>
            </div>
        </div>

</footer>

)
}