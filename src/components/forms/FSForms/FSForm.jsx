import { useNavigate, useParams } from "react-router-dom";
import "./_FSForm.scss";
import { useEffect, useState } from "react";
import { InputForm } from "../../Inputs/InputForm";
import { Button } from "../../buttons/button/Button";
import { createEvent, updateEvent } from "../../../services/eventApi";
import { createService, updateService } from "../../../services/servicesApi";
// import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../context/AuthContext";
import React, { Fragment } from 'react';
import Alert from "../../modal/alerts/Alert";
import { createEmployOffer, updateEmployOffer } from "../../../services/employApi";
// import { createResource, updateResource } from "../../../services/resourceApi"

const FSForm = ({ text, formType, formFields, initialData}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData || {});
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAuth();
  const { id } = useParams();

  const isEdit = Boolean(id);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData); // Si hay datos iniciales, actualizamos formData
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    setError(null);

    try {
      let res;
      if (isEdit) {
        if (formType === "evento") {
          res = await updateEvent(id, formData, token);
        } else if (formType === "servicio") {
          res = await updateService(id, formData, token);
        } else if (formType === "curriculum"){
          res = await updateEmployOffer(id, formData, token);
        } else if(formType === "recurso"){
          res = await updateResource(id, formData, token);
        }
      } else {
        if (formType === "evento") {
          res = await createEvent(formData, token);
        } else if (formType === "servicio") {
          res = await createService(formData, token);
        } else if (formType === "curriculum"){
          res = await createEmployOffer(formData, token);
        } else if(formType === "recurso"){
          res = await createResource(formData, token);
        }
      }
      
      setResponse(res);
      setIsOpen(true);
    } catch (err) {
      setError(err?.response?.data || "Ocurrió un error");
    }
  };


  const handleCancel = () => {
    navigate("/reverso-social/femsenior");
  };

  const handleAlertClose = () => {
    setIsOpen(false);
    if (formType === "evento") {
      navigate("/reverso-social/femsenior/eventos"); 
    } else if (formType === "servicio") {
      navigate("/reverso-social/femsenior/servicios");
    } else if (formType === "curriculum") {
      navigate("/reverso-social/femsenior/empleo");
    } else if (formType === "recurso") {
      navigate("/reverso-social/femsenior/recursos");
    }
    
  };


  return (
    <div className="formBackGround">
      <form onSubmit={handleSubmit}>
        <div className="formBox">
          <button
            className="buttonExit"
            onClick={handleAlertClose}
          >
            <img src="/icons/Exit.svg" alt="Cerrar formulario" />
          </button>
          <h2 className="requestTitle">{text}</h2>

          {formFields.map((field, index) => (
              <Fragment key={index}>
              <InputForm
                title={field.title}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                name={field.name}
                onChange={handleChange}
                options={field.options || []}
              />
              <p className="errorText">{error?.[field.name]?.message}</p>
              </Fragment>
          ))}
          <p>{error?.message}</p>
          <div className="buttonBox">
            <Button
              textButton={"Cancelar"}
              backgroundColor={"white"}
              border={"0.15rem solid #7176f8"}
              color={"#7176f8"}
              width={"20rem"}
              height={"3rem"}
              margin={"3rem 0 0"}
              onClick={handleCancel}
            />

            <Button
              textButton={"Aceptar"}
              backgroundColor={"#7176f8"}
              border={"0.15rem solid #7176f8"}
              color={"white"}
              type={"submit"}
              width={"20rem"}
              height={"3rem"}
              margin={"3rem 0 0"}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </form>
      <Alert
        alert={isEdit 
          ? formType === "servicio" 
            ? "¡El servicio ha sido actualizado!" 
            : "¡El evento ha sido actualizado!" 
          : formType === "servicio" 
            ? "¡El servicio ha sido creado con éxito!" 
            : "¡Evento creado con éxito!"
      }
        isOpen={isOpen}
        onclose={handleAlertClose}
      >
        <Button
          textButton={"Aceptar"}
          width={"12.5rem"}
          height={"2.75rem"}
          backgroundColor={"#7176f8"}
          border={"0.15rem solid #7176f8"}
          color={"white"}
          onClick={handleAlertClose}
        />
      </Alert>
      {error && (
        <Alert
          alert={`Error: ${error.message || "Ocurrió un error al procesar la solicitud"}`}
          isOpen={!!error}
          onClose={() => setError(null)}
        >
          <Button
            textButton={"Aceptar"}
            width={"12.5rem"}
            height={"2.75rem"}
            backgroundColor={"#7176f8"}
            border={"0.15rem solid #7176f8"}
            color={"white"}
            onClick={() => setError(null)}
          />
        </Alert>
      )}
    </div>
  );
};

export default FSForm;
