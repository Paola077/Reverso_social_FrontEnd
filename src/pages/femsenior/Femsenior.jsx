import React , { useState, useContext }  from "react";
import { Outlet } from "react-router-dom";
import Manifest from "../../components/sections/manifest/Manifest";
import ManifestButton from "../../components/buttons/manifestButton/ManifestButton";
import CardSection from "../../components/cards/cardSection/CardSection";
import MonthlyCalendar from "../../components/calendar/Calendar";
import DynamicTab from "../../components/tab/DynamicTab";
import { AuthContext } from "../../context/AuthContext"; 
import "./_Femsenior.scss";

function Femsenior() {
  const [tabLabel, setTabLabel] = useState("NUEVO EVENTO");
  const { isAuthenticated, role } = useContext(AuthContext);
  const showDynamicTab = isAuthenticated && role === "FEMSENIOR";

  const handleTabChange = (newLabel) => {
    setTabLabel(newLabel);
  };
  return (
    <div>
      <div className="header">
        <Manifest />
        <MonthlyCalendar />
      </div>
      <div>
        <CardSection onTabChange={handleTabChange} />
        {showDynamicTab && (
        <DynamicTab 
        label={tabLabel} 
        onClick={() => handleTabChange(tabLabel)} />
      )}
      </div>
      <Outlet />
    </div>
  );
}

export default Femsenior;
