import React, {useState} from "react";
import "./_CardSection.scss";
import InteractivePop from "../../modal/Interactive/InteractivePop";

const sections = [
  { id: 1, 
    title: "EVENTOS",
    imageUrl: "/icons/Events.svg",
    date: new Date ("2024-09-30"),
    time: 1633010400000,
    modality: "Presencial",
    description: [],
    location: "La Ciba, Barcelona",
    buttonText: "Apúntate",
  },
  { id: 2, title: "SERVICIOS", imageUrl: "/icons/Services.svg" },
  { id: 3, title: "EMPLEO", imageUrl: "/icons/Employ.svg" },
  { id: 4, title: "RECURSOS", imageUrl: "/icons/Resources.svg" },
];
const CardSection = () => {
    const [selectedSection, setSelectedSection] = useState(null);
    const [isPopupOpen, setIsPopUpOpen] = useState(false); 

    const handleSelect = (section) => {
      setSelectedSection(section);
      setIsPopUpOpen(true);
    };

    const handdleClosePopup = () => {
      setIsPopUpOpen(false);
    }

    const handleButtonClick = () => {
      console.log("Botón de popup clickeado");
      setIsPopUpOpen(false);
    }

    const formattedDate = selectedSection?.date?.toLocalDateString("es-ES", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const formattedTime = selectedSection?.time ? new Date(selectedSection.time).toLocaleTimeString("es-ES", {
      hour: '2-digit',
      minute: '2-digit',
    }) : null;
  
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
      {selectedSection && (
        <InteractivePop
          isOpen={isPopupOpen}
          onClose={handdleClosePopup}
          title={selectedSection.title}
          date={formattedDate}
          time={formattedTime}
          modality={selectedSection.modality}
          location={selectedSection.location}
          description={selectedSection.description}
          buttonText={selectedSection.buttonText}
          onButtonClick={handleButtonClick}  
        />
      )}
      </div>
    );
  };
  
  export default CardSection;