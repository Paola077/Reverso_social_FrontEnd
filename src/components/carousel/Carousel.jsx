import React, { useState } from "react";
import ModalWeOffer from "../modal/ModalWeOffer";
import "./_Carousel.scss";

const services = [
  { title: "CONSULTORÍAS", image: "src/components/carousel/consultoria.jpg", text: "Ofrecemos consultorías personalizadas para mejorar procesos internos y optimizar la productividad de las empresas. Trabajamos con profesionales especializados en diversas áreas." },
  { title: "FORMACIONES", image: "src/components/carousel/formaciones.jpg", text: "Nuestras formaciones abarcan temas actuales y relevantes para el crecimiento personal y profesional. Cursos prácticos y teóricos impartidos por expertos en sus respectivos campos." },
  { title: "AUDITORÍAS", image: "src/components/carousel/auditoria.jpg",  text: "Realizamos auditorías completas para optimizar el rendimiento y asegurar el cumplimiento normativo de las empresas. Identificamos áreas de mejora y ofrecemos recomendaciones claras."  },
  { title: "RED MUJERES", image: "src/components/carousel/red-mujeres.jpg", text: "Fomentamos la creación de redes de apoyo y empoderamiento para mujeres en el ámbito laboral. Proporcionamos recursos y espacios para promover la igualdad de género en el trabajo."  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null); // Estado para el modal

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = (service) => {
    setSelectedService(service); // Abre el modal con el servicio seleccionado
  };

  const closeModal = () => {
    setSelectedService(null); // Cierra el modal
  };

  return (
    <div className="carousel-container">
      <h2>QUÉ OFRECEMOS</h2>
      <div className="carousel">
        <button className="prev" onClick={handlePrevClick}>
          &#8249;
        </button>
        <div className="carousel-slides">
          {services.map((service, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <div className="card" onClick={() => openModal(service)}> {/* Al hacer clic en la imagen se abre el modal */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-image"
                />
                <p className="title">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="next" onClick={handleNextClick}>
          &#8250;
        </button>
      </div>

      {/* Aquí renderizamos el modal si hay un servicio seleccionado */}
      {selectedService && (
        <ModalWeOffer
          isOpen={!!selectedService}
          onClose={closeModal} // Pasamos la función para cerrar el modal
          title={selectedService.title}
          text={selectedService.text}
          imageUrl={selectedService.image}
        />
      )}
    </div>
  );
}

export default Carousel;
