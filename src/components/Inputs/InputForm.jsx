import React from "react";
import "./_InputForm.scss";

export const InputForm = ({
    title,
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    borderColor
}) => {

    return(
        <div className="inputBox">
        <h4>{title}:</h4>
        {type === "textarea" ?(
            <textarea
            className="inputForm textarea"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={9}
            name={name}
            style={{ borderColor: borderColor || "#7176f8" }}
            />
        ):(
            <input
            className="inputForm"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            style={{borderColor: borderColor || "#7176f8"}}
            />
        )}
        </div>

    )
}