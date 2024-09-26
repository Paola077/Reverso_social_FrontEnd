import React, { useState } from "react";
import "./_RequestForm.scss"
import { InputForm } from "../../Inputs/InputForm";
import { Button } from "../../buttons/button/Button";
import { useNavigate } from "react-router-dom";

export const RequestForm = ({text})=>{
    
    const navigate = useNavigate();
const [FormData, setFormData] = useState ({
    title:"",
    data:"",
    description:"",
    contact:""
})

const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.vale})

    // const handeSubmit = (e) => {
        //e.preventDefault()
    // }
};
    return(
        <div className="formBackground">
            <form onSubmit="">
                <div className="formBox">
                    <button className="buttonExit" onClick={() => navigate("/reverso-social") }>
                    <img src="/icons/Exit.svg" alt="Cerrar formulario" />
                    </button>
                    
                    <h2 className="requestTitle">{text}</h2>
                    
                    <InputForm
                    title={"Título"}
                    type={"text"}
                    placeholder={"Título"}
                    value={FormData.name}
                    onChange={handleChange}
                    name={"title"}
                    borderColor={"#35399b"}
                    />
                    <InputForm
                    title={"Datos"}
                    type={"text"}
                    placeholder={"Datos"}
                    value={FormData.name}
                    onChange={handleChange}
                    name={"data"}
                    borderColor={"#35399b"}
                    />
                    <InputForm
                    title={"Descripción"}
                    type={"textarea"}
                    placeholder={"Descripción"}
                    value={FormData.name}
                    onChange={handleChange}
                    name={"description"}
                    borderColor={"#35399b"}
                    />
                    <InputForm
                    title={"Contacto"}
                    type={"text"}
                    placeholder={"Contacto"}
                    value={FormData.name}
                    onChange={handleChange}
                    name={"contact"}
                    borderColor={"#35399b"}
                    />

                    <div className="buttonBox">
                        <Button 
                        textButton={"Cancelar"}
                        backgroundColor={"white"}
                        border={"0.15rem solid #35399b"}
                        color={"#35399b"}
                        onClick={() => setFormData({ title: "", data: "", description: "", contact: "" })}
                        />
                        <Button 
                        textButton={"Aceptar"}
                        backgroundColor={"#35399b"}
                        border={"0.15rem solid #35399b"}
                        color={"white"}
                        type={"submit"}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}