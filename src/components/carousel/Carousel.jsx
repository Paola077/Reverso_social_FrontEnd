import React, { useState, useRef } from "react";
import ModalWeOffer from "../modal/ModalWeOffer";
import "./_Carousel.scss";

const services = [
  { title: "CONSULTORÍAS", image: "images/consultoria.jpg", text: `
    <p>Consultoría para empresas y administraciones públicas, agentes sociales (sindicatos, patronal, etc).</p>
    <br/>
    <p> Elaboración de :</p>
    <br/>
    <ul>
      <li>Planes de Igualdad</li>
      <li>Protocolos contra el acoso sexual y por razón de sexo, protocolos LGTBI</li>
      <li>Protocolos de coordinación y actuación municipales, provinciales, regionales o estatales contra las violencias sexistas.</li>
      <li>Protocolos contra el acoso sexual.</li>
    </ul>
  `,
},
  { title: "FORMACIONES", image: "images/formaciones.jpg", text: "Nuestras formaciones abarcan temas actuales y relevantes para el crecimiento personal y profesional. Cursos prácticos y teóricos impartidos por expertos en sus respectivos campos." },
  { title: "AUDITORÍAS", image: "images/auditoria.jpg",  text: "Realizamos auditorías completas para optimizar el rendimiento y asegurar el cumplimiento normativo de las empresas. Identificamos áreas de mejora y ofrecemos recomendaciones claras."  },
  { title: "RED MUJERES", image: "images/red-mujeres.jpg", text: "Fomentamos la creación de redes de apoyo y empoderamiento para mujeres en el ámbito laboral. Proporcionamos recursos y espacios para promover la igualdad de género en el trabajo."  },
  { title: "PLANES DE IGUALDAD", image: "images/plan-igualdad.jpg", text: `
    <p>Con los Planes de Igualdad buscamos transformar estructuras sociales para <b>eliminar la discriminación y fomentar la igualdad</b>.</p> <br/>
    <p>Esto incluye <b>erradicar violencias y discriminaciones</b> hacia mujeres y niñas, garantizar su acceso a la salud y promover su participación en decisiones políticas y económicas.</p> <br/>
    <p>Además, se propone <b>profesionalizar el trabajo doméstico y remunerar los cuidados</b>, así como mejorar las habilidades laborales de las mujeres. También se enfatiza en la coeducación, la prevención de violencias machistas y el apoyo a la investigación sobre género. La meta es <b>construir una sociedad inclusiva y equitativa</b>, que valore y respete la diversidad.</p>`  },
  
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null); // Estado para el modal

  const carouselRef = useRef(null);

const handlePrevClick = () => {
  if (carouselRef.current) {
    carouselRef.current.scrollLeft -= 300; 
  }
};

const handleNextClick = () => {
  if (carouselRef.current) {
    carouselRef.current.scrollLeft += 300; 
  }
};

  const openModal = (service) => {
    setSelectedService(service); // Abre el modal con el servicio seleccionado
  };

  const closeModal = () => {
    setSelectedService(null); // Cierra el modal
  };

  return (
    <div className="carousel-box">
      <div className="carousel-container">
      <h2>QUÉ OFRECEMOS</h2>
      <div className="carousel">
        <button className="prev" onClick={handlePrevClick}>
          &#8249;
        </button>
        <div className="carousel-slides" ref={carouselRef}>
          {services.map((service, index) => (
            <div
              key={index}
              className="slide">
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
          text={selectedService.text }
          imageUrl={selectedService.image}
        />
      )}
    </div>
    </div>
  );
}

export default Carousel;
