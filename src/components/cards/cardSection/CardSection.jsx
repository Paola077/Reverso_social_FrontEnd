import React, { useState } from "react";
import "./_CardSection.scss";
import { Link } from "react-router-dom";

const sections = [
  {
    id: 1,
    title: "EVENTOS",
    imageUrl: "/icons/Events.svg",
    tabLabel: "NUEVO EVENTO",
  },
  {
    id: 2,
    title: "SERVICIOS",
    imageUrl: "/icons/Services.svg",
    tabLabel: "NUEVO SERVICIO",
  },
  {
    id: 3,
    title: "EMPLEO",
    imageUrl: "/icons/Employ.svg",
    tabLabel: "SUBE TU CURRICULUM",
  },
  {
    id: 4,
    title: "RECURSOS",
    imageUrl: "/icons/Resources.svg",
    tabLabel: "SUBE UN RECURSO",
  },
];

const CardSection = ({ onTabChange }) => {
  const [selectedSection, setSelectedSection] = useState(1);

  const handleSelect = (id) => {
    setSelectedSection(id);
    const selected = sections.find((section) => section.id === id);
    if (selected && onTabChange) {
      onTabChange(selected.tabLabel);
    }
  };

  return (
    <div className="cardSectionContainer">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={`/reverso-social/femsenior/${section.title.toLowerCase()}`} 
          className="sectionLink"
        >
          <button
            className={`sectionCard ${
              selectedSection === section.id ? "selected" : ""
            }`}
            onClick={() => handleSelect(section.id)}
            aria-pressed={selectedSection === section.id}
          >
            <img
              src={section.imageUrl}
              alt={section.title}
              className="sectionImage"
            />
            <h3 className="sectionCardTitle">{section.title}</h3>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CardSection;
