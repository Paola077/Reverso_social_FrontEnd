import React from "react";
import { Outlet } from "react-router-dom";
import Manifest from "../components/sections/manifest/Manifest";
import ManifestButton from "../components/buttons/manifestButton/ManifestButton";
import CardSection from "../components/cards/cardSection/CardSection";


function Femsenior() {
  
  return (
    <div>
      <div className="manifestContainer">
        <Manifest />
        <ManifestButton 
        
        />
      </div>
      <div>
        <CardSection />
        
      </div>
      <Outlet />
    </div>
  );
}

export default Femsenior;
