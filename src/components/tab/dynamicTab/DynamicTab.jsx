import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import './_DynamicTab.scss';
import SectorSelect from '../tabBySector/SectorSelect';

const DynamicTab = ({ label, onClick,showSector }) => {
  const navigate = useNavigate();
  const getFormRoute = (label) => {
    switch (label) {
      case "NUEVO EVENTO":
        return "/formulariofs/evento";
      case "NUEVO SERVICIO":
        return "/formulariofs/servicio";
      case "SUBE TU CURRICULUM":
        return "/formulariofs/curriculum";
      case "SUBE UN RECURSO":
        return "/formulariofs/recurso";
      default:
        return "/formulariofs/evento";
    }
  };

    return (
      <div className="sectionTabContainer">
        {showSector && <SectorSelect />}
        <div
          className="sectionTab"
          onClick={() => navigate(getFormRoute(label))}
        >
          <span className="tabLabel">{label}</span>{" "}
        </div>
        <div className="underlineTab"></div>
      </div>
    );
  };
  
  export default DynamicTab;

  