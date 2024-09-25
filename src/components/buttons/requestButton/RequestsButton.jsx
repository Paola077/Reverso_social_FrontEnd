import React from "react";
import "./_RequestsButton.scss"


export const RequestButton = ({text, onClick, width, height, fontSize, marginRight})=>{
    
    return(
        <button
        className="requestButton"
        style={{width: width, height: height, fontSize: fontSize, marginRight: marginRight}}
        onClick={onClick}>
            {text}
        </button>
    )
}