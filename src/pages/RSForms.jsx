import React from "react";
import { useParams } from "react-router-dom";
import { RequestForm } from "../components/forms/RequestForm/RequestForm";

const RSForms = () => {
    const { formType } = useParams();

    const formConfigurations = {
        colabora: {
            text: "COLABORA",
            fields: [
                {title: "Título", type: "text", placeholder: "Título", name: "title"},
                { title: "Datos", type: "text", placeholder: "Datos", name: "data" },
                { title: "Descripción", type: "textarea", placeholder: "Descripción", name: "description" },
                { title: "Contacto", type: "text", placeholder: "Contacto", name: "contact" },
            ],
        },
        peticiones: {
            text: "PETICIÓN",
            fields:[
                {title: "Título", type: "text", placeholder: "Título", name: "title"},
                { title: "Datos", type: "text", placeholder: "Datos", name: "data" },
                { title: "Descripción", type: "textarea", placeholder: "Descripción", name: "description" },
                { title: "Contacto", type: "text", placeholder: "Contacto", name: "contact" },
            ]
        }
    }

    const currentForm = formConfigurations[formType];

    return(
        <RequestForm 
        text={currentForm.text}
        formFields={currentForm.fields}
        />
    )

}

export default RSForms;