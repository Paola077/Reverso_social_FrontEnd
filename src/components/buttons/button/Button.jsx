import React from "react";
import "./_Button.scss"

export const Button = ({textButton, onClick, backgroundColor, border, color, type})=>{

    return(
        <button className="aceptCancel"
        style={{backgroundColor: backgroundColor, border: border, color:color}}
        onClick={onClick}
        type={type}
        >
            {textButton}
        </button>
    )
}