import React from "react";
import "./_InputForm.scss";

export const InputForm = ({
    title,
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    options = [],
    borderColor,
    min
}) => {
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "maxParticipants") {
            const validValue = Math.max(0, value); 
            onChange({ target: { name, value: validValue } }); 
        } else {
            onChange(e);
        }
    };


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
        ): type === "select" ?(
            <select
                    className="inputForm"
                    value={value}
                    onChange={onChange}
                    name={name}
                    style={{ borderColor: borderColor || "#7176f8" }}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

        ):(
            <input
            className="inputForm"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
            name={name}
            style={{borderColor: borderColor || "#7176f8"}}
            />
        )}
        </div>

    )
}