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
      title: "Software Engineer",
      linkedinUrl: "https://www.linkedin.com/in/pilar-lim%C3%B3n-b6135843/",
    },
    {
      imageUrl: "images/Lola.png",
      name: "Lola Martínez Cueto",
      title: "UX Designer",
      linkedinUrl: "https://www.linkedin.com/in/lolacoach/",
    },
    {
      imageUrl: "images/Susana.png",
      name: "Susana Ruiz",
      title: "Data Scientist",
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
