import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import './_DynamicTab.scss';

const DynamicTab = ({ label, onClick }) => {
  const navigate = useNavigate();
  const getFormRoute = (label) => {
    switch (label) {
      case "NUEVO EVENTO":
        return "/formulariofs/evento";
      case "NUEVA MENTORÍA":
        return "/formulariofs/mentoria";
      case "SUBE TU CURRICULUM":
        return "/formulariofs/curriculum";
      case "SUBE UN RECURSO":
        return "/formulariofs/recurso";
      default:
        return "/formulariofs/evento";
    }
  };

    return (
      <div className="secctionTabContainer">
      <div className="secctionTab" onClick={() => navigate(getFormRoute(label))}>
        {label}
      </div>
      <div className="underlineTab" ></div>
      </div>
    );
  };
  
  export default DynamicTab;