import React from "react";
import "./_AceptCancelButton.scss"

export const AceptCancelButton = ({textButton, onClick, backgroundColor, border, color, type})=>{

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