import React, { useState }  from "react";
import { Outlet } from "react-router-dom";
import Manifest from "../components/sections/manifest/Manifest";
import ManifestButton from "../components/buttons/manifestButton/ManifestButton";
import CardSection from "../components/cards/cardSection/CardSection";
import DynamicTab from "../components/tab/DynamicTab"

function Femsenior() {
  const [tabLabel, setTabLabel] = useState("NUEVO EVENTO");

  const handleTabChange = (newLabel) => {
    setTabLabel(newLabel);
  };

  return (
    <div>
      <div className="manifestContainer">
        <Manifest />
        <ManifestButton 
        
        />
      </div>
      <div>
        <CardSection onTabChange={handleTabChange} /> 
        <DynamicTab label={tabLabel}  />
      </div>
      <Outlet />
    </div>
  );
}

export default Femsenior;