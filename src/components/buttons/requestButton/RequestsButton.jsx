import React from "react";
import "./_RequestsButton.scss"


export const RequestButton = ({text, onClick, width, height, fontSize, marginRight, color})=>{
    
    return(
        <button
        className="requestButton"
        style={{width: width, height: height, fontSize: fontSize, marginRight: marginRight, color: color}}
        onClick={onClick}>
            {text}
        </button>
    )
}