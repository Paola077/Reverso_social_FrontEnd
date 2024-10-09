import React, { useState, useEffect } from "react";
import FSForm from "../components/forms/FSForms/FSForm";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getEvent } from "../services/eventApi";
import { getService } from "../services/servicesApi";
import { getResourceById } from "../services/resourceApi";

const FSForms = () => {
  const { formType, id } = useParams();
  const { token } = useAuth();
  const [initialData, setInitialData] = useState();
  const [loading, setLoading] = useState(true);

  console.log("formType:", formType); 

  useEffect(() => {
    if (id) {
      let fetchData;
      switch (formType) {
        case "evento":
          fetchData = getEvent(id);
          break;
        case "servicio":
          fetchData = getService(id);
          break;
        case "curriculum":
          fetchData = getEmployById(id);
          break;
        case "recurso":
          fetchData = getResourceById(id);
          break;
        default:
          break;
      }

      if (fetchData){
        fetchData
        .then((data) => {
          setInitialData(data);
        })
        .catch((error) => {
          console.log("Error al obtener los datos:", error);
        })
        .finally(() => setLoading(false))
      }
    }else {
      setLoading(false);
    }
  }, [id, formType]);


  const formConfigurations = {
    evento: {
      text: id ? "EDITAR EVENTO" : "NUEVO EVENTO",
      fields: [
        {
          title: "Título",
          type: "text",
          placeholder: "Título del evento",
          name: "title",
        },
        { title: "Fecha", type: "date", placeholder: "", name: "date" },
        { title: "Hora", type: "datetime", placeholder: "00:00", name: "time" },
        {
          title: "Descripción",
          type: "textarea",
          placeholder: "Descripción del evento",
          name: "description",
        },
        {
          title: "Max número de participantes",
          type: "number",
          min: "0",
          placeholder: "0",
          name: "maxParticipants",
        },
        {
          title: "Modalidad",
          type: "select",
          name: "modality",
          options: [
            { label: "Presencial", value: "inPerson" },
            { label: "Online", value: "online" },
          ],
        },
        {
          title: "Sector",
          type: "select",
          name: "sector",
          optionText: "Selecciona el sector",
          options: [
            {
              label: "Administración y Finanzas",
              value: "Administración y Finanzas",
            },
            {
              label: "Atención al Cliente y Servicios",
              value: "Atención al Cliente y Servicios",
            },
            { label: "Atención y Cuidados", value: "Atención y Cuidados" },
            { label: "Artes y Creatividades", value: "Artes y Creatividades" },
            { label: "Dirección y Ejecución", value: "Dirección y Ejecución" },
            { label: "Hostelería y Turismo", value: "Hostelería y Turismo" },
            { label: "Psicología", value: "Psicología" },
            {
              label: "Servicios a la Comunidad",
              value: "Servicios a la Comunidad",
            },
            { label: "Tecnología", value: "Tecnología" },
            {
              label: "Terapias Alternativas y Desarrollo Personal",
              value: "Terapias Alternativas y Desarrollo Personal",
            },
          ],
        },
        {
          title: "Localización",
          type: "text",
          placeholder: "Dirección",
          name: "location",
        },
      ],
    },
    servicio: {
      text: id ? "EDITAR SERVICIO" :"NUEVO SERVICIO",
      fields: [
        {
          title: "Título",
          type: "text",
          placeholder: "Título de la mentoría",
          name: "title",
        },
        {
          title: "Tipo",
          type: "select",
          name: "type",
          optionText: "Selecciona el tipo de servicio",
          options: [
            {
              label: "Mentorías",
              value: "Mentorías",
            }
          ]
        },
        {
          title: "Sector",
          type: "select",
          name: "sector",
          optionText: "Selecciona el sector",
          options: [
            {
              label: "Administración y Finanzas",
              value: "Administración y Finanzas",
            },
            {
              label: "Atención al Cliente y Servicios",
              value: "Atención al Cliente y Servicios",
            },
            { label: "Atención y Cuidados", value: "Atención y Cuidados" },
            { label: "Artes y Creatividades", value: "Artes y Creatividades" },
            { label: "Dirección y Ejecución", value: "Dirección y Ejecución" },
            { label: "Hostelería y Turismo", value: "Hostelería y Turismo" },
            { label: "Psicología", value: "Psicología" },
            {
              label: "Servicios a la Comunidad",
              value: "Servicios a la Comunidad",
            },
            { label: "Tecnología", value: "Tecnología" },
            {
              label: "Terapias Alternativas y Desarrollo Personal",
              value: "Terapias Alternativas y Desarrollo Personal",
            },
          ],
        },
        {
          title: "Descripción",
          type: "textarea",
          placeholder: "Descripción de la mentoría",
          name: "description",
        },
        { title: "Email", type: "email", placeholder: "Email", name: "email" },
        {
          title: "Teléfono",
          type: "tel",
          placeholder: "Teléfono",
          name: "phone",
        },
      ],
    },
    curriculum: {
      text: id ? "EDITAR CURRICULUM" :"SUBE TU CURRICULUM",
      fields: [
        {
          title: "Puesto",
          type: "text",
          placeholder: "Puesto con el que te ofreces",
          name: "work",
        },
        {
          title: "Sector",
          type: "select",
          name: "sector",
          optionText: "Selecciona el sector",
          options: [
            {
              label: "Administración y Finanzas",
              value: "Administración y Finanzas",
            },
            {
              label: "Atención al Cliente y Servicios",
              value: "Atención al Cliente y Servicios",
            },
            { label: "Atención y Cuidados", value: "Atención y Cuidados" },
            { label: "Artes y Creatividades", value: "Artes y Creatividades" },
            { label: "Dirección y Ejecución", value: "Dirección y Ejecución" },
            { label: "Hostelería y Turismo", value: "Hostelería y Turismo" },
            { label: "Psicología", value: "Psicología" },
            {
              label: "Servicios a la Comunidad",
              value: "Servicios a la Comunidad",
            },
            { label: "Tecnología", value: "Tecnología" },
            {
              label: "Terapias Alternativas y Desarrollo Personal",
              value: "Terapias Alternativas y Desarrollo Personal",
            },
          ],
        },
        {
          title: "Descripción",
          type: "textarea",
          placeholder: "Describe tu experiencia",
          name: "description",
        },
        {
          title: "Curriculum",
          type: "file",
          placeholder: "Selecciona",
          name: "curriculum",
          accept: "image/*,.pdf",
        },
      ],
    },
    recurso: {
      text:id ? "EDITAR RECURSO" : "NUEVO RECURSO",
      fields: [
        {
          title: "Título",
          type: "text",
          placeholder: "Título del recurso",
          name: "title",
        },
        {
          title: "Enlace",
          type: "url",
          placeholder: "Enlace del recurso",
          name: "url",
        },
        {
          title: "Descripción",
          type: "textarea",
          placeholder: "Descripción",
          name: "description",
        },
        {
          title: "Documento",
          //type: "file",
          type: "text",
          placeholder: "Selecciona un documento",
          name: "file",
          //accept: "multimedia",
        },
      ],
    },
  };
  const currentForm = formConfigurations[formType];
  return <FSForm 
  text={currentForm.text}
  formType={formType} 
  formFields={currentForm.fields}
  initialData={initialData} />;
};

export default FSForms;
