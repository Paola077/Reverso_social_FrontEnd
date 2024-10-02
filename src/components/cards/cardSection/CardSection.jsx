import React, {useState} from "react";
import "./_CardSection.scss";
import InteractivePop from "../../modal/Interactive/InteractivePop";

const sections = [
  { id: 1, 
    titleSection: "EVENTOS",
    imageUrl: "/icons/Events.svg",
    title: "Mentoria sobre CV",
    modality: "PRESENCIAL",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"],
    location: "La Ciba, Barcelona",
    buttonText: "Apúntate",
  },
  { id: 2, 
    titleSection: "SERVICIOS", 
    imageUrl: "/icons/Services.svg",
    title: "Mentoria sobre empleabilidad",
    type: "Laboral",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"],
    contentText: "Contacta conmigo",
    phoneNumber: "601XXXXXX",
    email: "test@test.com",
    user_id: "Nombre",
  },
  { id: 3,
    titleSection: "EMPLEO",
    imageUrl: "/icons/Employ.svg",
    title: "Cv de Psicología",
    position: "Psicología",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"],
    contentText: "Ver el CV:",
    buttonText: "Ver",
  },
  { id: 4, 
    titleSection: "RECURSOS", 
    imageUrl: "/icons/Resources.svg",
    title: "Empoderamiento femenino",
    description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"],
    contentText: "RECURSO",
    buttonText: "Ver",
  },
];
const CardSection = () => {
    const [selectedSection, setSelectedSection] = useState(null);
    const [isPopupOpen, setIsPopUpOpen] = useState(false); 

    const handleSelect = (section) => {
      setSelectedSection(section);
      setIsPopUpOpen(true);
    };

    const handleClosePopup = () => {
      setIsPopUpOpen(false);
    }

    const handleButtonClick = () => {
      console.log("Botón de popup clickeado");
      setIsPopUpOpen(false);
    }

    return (
      <div className="cardSectionContainer">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`sectionCard ${selectedSection?.id === section.id ? "selected" : ""}`}
            onClick={() => handleSelect(section)}
            aria-pressed={selectedSection === section.id}>
            <img src={section.imageUrl} alt={section.titleSection} className="sectionImage" />
            <h3 className="sectionCardTitle">{section.titleSection}</h3>
          </button>
        ))}
      {selectedSection && (
        <InteractivePop
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          title={selectedSection.title}
          titleSection={selectedSection.titleSection}
          modality={selectedSection.modality}
          location={selectedSection.location}
          type={selectedSection.type}
          position={selectedSection.position}
          email={selectedSection.email}
          phoneNumber={selectedSection.phoneNumber}
          user_id={selectedSection.user_id}
          description={selectedSection.description}
          buttonText={selectedSection.buttonText}
          contentText={selectedSection.contentText}
          onButtonClick={handleButtonClick}  
        />
      )}
      </div>
    );
  };
  
  export default CardSection;