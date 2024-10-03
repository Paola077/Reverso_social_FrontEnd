import React, {useState} from "react";
import "./_CardSection.scss";

const sections = [
  { id: 1, title: "EVENTOS", imageUrl: "/icons/Events.svg", tabLabel: "NUEVO EVENTO"  },
  { id: 2, title: "SERVICIOS", imageUrl: "/icons/Services.svg" , tabLabel: "NUEVA MENTORÍA" },
  { id: 3, title: "EMPLEO", imageUrl: "/icons/Employ.svg",tabLabel: "SUBE TU CURRICULUM"  },
  { id: 4, title: "RECURSOS", imageUrl: "/icons/Resources.svg", tabLabel: "SUBE UN RECURSO"  },
];
  const CardSection = ({ onTabChange }) => {
    const [selectedSection, setSelectedSection] = useState(null);
  
    const handleSelect = (id) => {
      setSelectedSection(id);
      const selected = sections.find(section => section.id === id);
      if (selected && onTabChange) {
        onTabChange(selected.tabLabel); 
      }
    };
  
    return (
      <div className="cardSectionContainer">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`sectionCard ${selectedSection === section.id ? "selected" : ""}`}
            onClick={() => handleSelect(section.id)}
            aria-pressed={selectedSection === section.id}
          >
            <img src={section.imageUrl} alt={section.title} className="sectionImage" />
            <h3 className="sectionCardTitle">{section.title}</h3>
          </button>
        ))}
      </div>
    );
  };
  
  export default CardSection;