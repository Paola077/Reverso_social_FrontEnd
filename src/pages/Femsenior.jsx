import React from "react";
import { Outlet } from "react-router-dom";
import Manifest from "../components/sections/manifest/Manifest";
import ManifestButton from "../components/buttons/manifestButton/ManifestButton";
import CardSection from "../components/cards/cardSection/CardSection";
import DynamicTab from "../components/tab/DynamicTab"

function Femsenior() {
  const handleClick = () => {
    alert('Haz hecho clic en la pestaña');
  };
  return (
    <div>
      <div className="manifestContainer">
        <Manifest />
        <ManifestButton 
        
        />
      </div>
      <div>
        <CardSection />
        <DynamicTab label="NUEVO EVENTO" onClick={handleClick} />
      </div>
      <Outlet />
    </div>
  );
}

export default Femsenior;
