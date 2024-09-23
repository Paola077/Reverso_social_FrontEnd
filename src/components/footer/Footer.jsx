import React from "react";
import "./_Footer.scss";
import { SlSocialInstagram } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";


export const Footer = () =>{
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
                <BsFacebook className="footerFb" />
                <SlSocialInstagram className="footerIg"/>
            </div>
        </div>

</footer>

)
}