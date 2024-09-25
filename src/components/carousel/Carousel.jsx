import React, { useState } from "react";
import "./_Carousel.scss";

const services = [
  { title: "CONSULTORÍAS", image: "src/components/carousel/consultoria.jpg" },
  { title: "FORMACIONES", image: "src/components/carousel/formaciones.jpg" },
  { title: "AUDITORÍAS", image: "src/components/carousel/auditoria.jpg" },
  { title: "RED MUJERES", image: "src/components/carousel/red-mujeres.jpg" },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              <div className="card">
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
    </div>
  );
}

export default Carousel;
