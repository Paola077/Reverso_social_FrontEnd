import React, { useState, useRef } from "react";
import "./_RequestForm.scss";
import { InputForm } from "../../Inputs/InputForm";
import { Button } from "../../buttons/button/Button";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export const RequestForm = ({ text }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    data: "",
    description: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_r6khmkf";
    const publicKey = "hCm5mm5jzniCRTXQR";
    const templateId = "template_bpn88l8";

    emailjs.init(publicKey);

    const templateParams = {
      name: formData.data,
      message: formData.description,
      contact: formData.contact,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <div className="formBackground">
      <form ref={refForm} onSubmit={handleSubmit}>
        <div className="formBox">
          <button
            className="buttonExit"
            onClick={() => navigate("/reverso-social")}
          >
            <img src="/icons/Exit.svg" alt="Cerrar formulario" />
          </button>

          <h2 className="requestTitle">{text}</h2>

          <InputForm
            title={"Título"}
            type={"text"}
            placeholder={"Título"}
            value={formData.title}
            onChange={handleChange}
            name={"title"}
            borderColor={"#35399b"}
          />
          <InputForm
            title={"Datos"}
            type={"text"}
            placeholder={"Datos"}
            value={formData.data}
            onChange={handleChange}
            name={"data"}
            borderColor={"#35399b"}
          />
          <InputForm
            title={"Descripción"}
            type={"textarea"}
            placeholder={"Descripción"}
            value={formData.description}
            onChange={handleChange}
            name={"description"}
            borderColor={"#35399b"}
          />
          <InputForm
            title={"Contacto"}
            type={"text"}
            placeholder={"Contacto"}
            value={formData.contact}
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
              width={"20rem"}
              height={"3rem"}
              margin={"3rem 0 0"}
              onClick={() =>
                setFormData({
                  title: "",
                  data: "",
                  description: "",
                  contact: "",
                })
              }
            />
            <Button
              textButton={"Aceptar"}
              backgroundColor={"#35399b"}
              border={"0.15rem solid #35399b"}
              color={"white"}
              type={"submit"}
              width={"20rem"}
              height={"3rem"}
              margin={"3rem 0 0"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
