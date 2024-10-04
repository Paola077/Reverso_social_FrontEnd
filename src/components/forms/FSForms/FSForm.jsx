import { useNavigate, useParams } from "react-router-dom";
import "./_FSForm.scss";
import { useState } from "react";
import { InputForm } from "../../Inputs/InputForm";
import { Button } from "../../buttons/button/Button";
import { createEvent } from "../../../services/eventApi";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../context/AuthContext";
import React, { Fragment } from 'react';
import Alert from "../../modal/alerts/Alert";

const FSForm = ({ text, formFields, initialFormData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setError(null);
    e.preventDefault();
    //console.log("Datos del formulario:", formData);
    if (text == "NUEVO EVENTO") {
      mutationEvent.mutate(formData);
    }
  };

  const handleCancel = () => {
    navigate("/reverso-social/femsenior");
  };

  const mutationEvent = useMutation({
    mutationFn: (form) => createEvent(form, token),
    onSuccess: (res) => {
      setIsOpen(true);
    },
    onError: (error) => {
      setError(error?.response?.data);
    },
  });

  const handleAlertClose = () => {
    setIsOpen(false); 
    navigate("/reverso-social/femsenior/eventos");
  };


  return (
    <div className="formBackGround">
      <form onSubmit={handleSubmit}>
        <div className="formBox">
          <button
            className="buttonExit"
            onClick={() => navigate("/reverso-social/femsenior")}
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
                value={formData[field.name]}
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
        alert="Se ha registrado el evento con exito!"
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
    </div>
  );
};

export default FSForm;
