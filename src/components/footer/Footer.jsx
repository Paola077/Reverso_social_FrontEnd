import React from "react";
import "./_Footer.scss";
import { SlSocialInstagram } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import { RequestButton } from "../buttons/requestButton/RequestsButton";


export const Footer = () =>{
    
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
                <p>Diercción: </p>
                <p>Teléfono: </p>
                <p>Correo electrónico:</p>
            </div>
            <div className="footerSocials">
                <RequestButton 
                    text={"FORMULARIO DE PETICIONES"} 
                    width={"16rem"} 
                    height={"2rem"}
                    marginRight={"1.5rem"} 
                    fontSize={"0.8rem"}/>
                <BsFacebook className="footerFb" onClick={handleClick2}/>
                <SlSocialInstagram className="footerIg" onClick={handleClick1}/>
            </div>
        </div>

</footer>

)
}