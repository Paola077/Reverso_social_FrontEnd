import React, { useState } from "react";
import "./_RequestForm.scss"
import { InputForm } from "../../Inputs/InputForm";
import { AceptCancelButton } from "../../buttons/aceptCancelComponent/AceptCancelButton";

export const RequestForm = ({text})=>{
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
                    <button className="buttonExit">
                    <img src="src/components/forms/RequestForm/Exit.svg" alt="Cerrar formulario" />
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
                        <AceptCancelButton 
                        textButton={"Cancelar"}
                        backgroundColor={"white"}
                        border={"0.15rem solid #35399b"}
                        color={"#35399b"}
                        onClick={() => setFormData({ title: "", data: "", description: "", contact: "" })}
                        />
                        <AceptCancelButton 
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