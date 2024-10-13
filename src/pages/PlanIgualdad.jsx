import React from "react";
import CardPhoto from "../components/cards/cardPhoto/CardPhoto";
import AboutUs from "../components/sections/AboutUs";
import Carousel from "../components/carousel/Carousel";
import Intro from "../components/intro/Intro";
import Collaborate from "../components/sections/collaborate/Collaborate";

const PlanIgualdad = () => {
  const people = [
    {
      imageUrl: "images/Pilar.png",
      name: "Pilar Limón",
      title: "Consultora, coordinadora, formadora y desarrolladora de proyectos de género así como en intervención sociolaboral",
      linkedinUrl: "https://www.linkedin.com/in/pilar-lim%C3%B3n-b6135843/",
    },
    {
      imageUrl: "images/Lola.png",
      name: "Lola Martínez",
      title: "Formación e investigación de derechos humanos y estudios de género",
      linkedinUrl: "https://www.linkedin.com/in/lolacoach/",
    },
    {
      imageUrl: "images/Susana.png",
      name: "Susana Ruiz",
      title: "Especialista en proyectos sociales con personas dependientes y colectivos en situación de vulnerabilidad",
      linkedinUrl: "",
    },
  ];

  return (
    <div>
      <div id="intro">
        <Intro />
      </div>

      <div id="carousel" className="carousel">
        <Carousel />
      </div>

      <div id="collaborate">
        <Collaborate />
      </div>

      <div id="aboutUs" className="aboutUsContainer">
        <AboutUs />
      </div>

      <div id="people" className="cardPhotoContainer">
        {people.map((person, index) => (
          <CardPhoto
            key={index}
            imageUrl={person.imageUrl}
            name={person.name}
            title={person.title}
            linkedinUrl={person.linkedinUrl}
          />
        ))}
      </div> 
    </div>
  );
};

export default PlanIgualdad;
