import React from "react";
import FSForm from "../components/forms/FSForms/FSForm";
import { useParams } from "react-router-dom";

const FSForms = () => {
    const { formType } = useParams();

    const formConfigurations = {
        evento: {
            text: "NUEVO EVENTO",
            fields: [
                {title: "Título", type: "text", placeholder: "Título del evento", name: "title"},
                {title: "Fecha", type: "date", placeholder: "", name: "date"},
                {title: "Hora", type: "datetime", placeholder: "00:00", name: "time"},
                {title: "Descripción", type: "textarea", placeholder: "Descripción del evento", name: "description"},
                {title: "Max número de participantes", type: "number", min:"0",placeholder: "0", name: "participants"},
                {title: "Modalidad", type: "select", name: "mode", options: [
                    {label: "Presencial", value:"inPerson"},
                    {label: "Online", value:"online"}
                ]},
                {title: "Sector", type: "select", name: "sector", optionText: "Selecciona el sector", options: [
                    {label: "Administración y finanzas", value:"Administración y finanzas"},
                    {label: "Atención al cliente y servicios", value:"Atención al cliente y servicios"},
                    {label: "Atención y cuidados", value:"Atención y cuidados"},
                    {label: "Artes y creatividades", value:"Artes y creatividades"},
                    {label: "Dirección y ejecución", value:"Dirección y ejecución"},
                    {label: "Hostelería y turismo", value:"Hostelería y turismo"},
                    {label: "Psicología", value:"Psicología"},
                    {label: "Sanidad", value:"Sanidad"},
                    {label: "Servicios a la comunidad", value:"Servicios a la comunidad"},
                    {label: "Tecnología", value:"Tecnología"},
                    {label: "Terapias alternativas y desarrollo personal", value:"Terapias alternativas y desarrollo personal"}
                ]},
                {title: "Localización", type: "text", placeholder: "Dirección", name: "adress"},
            ]
        },
        mentoria: {
            text:"NUEVA MENTORÍA",
            fields: [
                {title: "Título", type: "text", placeholder: "Título de la mentoría", name: "title"},
                {title: "Sector", type: "select", name: "sector", optionText: "Selecciona el sector", options: [
                    {label: "Administración y finanzas", value:"Administración y finanzas"},
                    {label: "Atención al cliente y servicios", value:"Atención al cliente y servicios"},
                    {label: "Atención y cuidados", value:"Atención y cuidados"},
                    {label: "Artes y creatividades", value:"Artes y creatividades"},
                    {label: "Dirección y ejecución", value:"Dirección y ejecución"},
                    {label: "Hostelería y turismo", value:"Hostelería y turismo"},
                    {label: "Psicología", value:"Psicología"},
                    {label: "Sanidad", value:"Sanidad"},
                    {label: "Servicios a la comunidad", value:"Servicios a la comunidad"},
                    {label: "Tecnología", value:"Tecnología"},
                    {label: "Terapias alternativas y desarrollo personal", value:"Terapias alternativas y desarrollo personal"}
                ]},
                {title: "Descripción", type: "textarea", placeholder: "Descripción de la mentoría", name: "description"},
                {title: "Email", type: "email", placeholder: "Email", name: "email"},
                {title: "Teléfono", type: "tel", placeholder: "Teléfono", name: "phone"},

            ]
        },
        curriculum: {
            text:"SUBE TU CURRICULUM",
            fields: [
                {title: "Puesto", type: "text", placeholder: "Puesto con el que te ofreces", name: "work"},
                {title: "Sector", type: "select", name: "sector", optionText: "Selecciona el sector", options: [
                    {label: "Administración y finanzas", value:"Administración y finanzas"},
                    {label: "Atención al cliente y servicios", value:"Atención al cliente y servicios"},
                    {label: "Atención y cuidados", value:"Atención y cuidados"},
                    {label: "Artes y creatividades", value:"Artes y creatividades"},
                    {label: "Dirección y ejecución", value:"Dirección y ejecución"},
                    {label: "Hostelería y turismo", value:"Hostelería y turismo"},
                    {label: "Psicología", value:"Psicología"},
                    {label: "Sanidad", value:"Sanidad"},
                    {label: "Servicios a la comunidad", value:"Servicios a la comunidad"},
                    {label: "Tecnología", value:"Tecnología"},
                    {label: "Terapias alternativas y desarrollo personal", value:"Terapias alternativas y desarrollo personal"}
                ]},
                {title: "Descripción", type: "textarea", placeholder: "Describe tu experiencia", name: "description"},
                {title: "Curriculum", type: "file", placeholder: "Selecciona", name: "curriculum", accept:"image/*,.pdf"},
            ]
        },
        recurso: {
            text:"NUEVO RECURSO",
            fields: [
                {title: "Título", type: "text", placeholder: "Título del recurso", name: "resorce"},
                {title: "Enlace", type: "url", placeholder: "Enlace del recurso", name: "link"},
                {title: "Descripción", type: "textarea", placeholder: "Descripción", name: "description"},
                {title: "Documento", type: "file", placeholder: "Selecciona un documento", name: "document", accept:"multimedia"},
            ]
        }
    }
    const currentForm = formConfigurations[formType];
    return (
        <FSForm 
        text = {currentForm.text}
        formFields = {currentForm.fields}
        />
    )
}

export default FSForms;