import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Manifest from "../../components/sections/manifest/Manifest";
import CardSection from "../../components/cards/cardSection/CardSection";
import MonthlyCalendar from "../../components/calendar/Calendar";
import DynamicTab from "../../components/tab/dynamicTab/DynamicTab";
import { AuthContext } from "../../context/AuthContext";
import "./_Femsenior.scss";
import SectorSelect from "../../components/tab/tabBySector/SectorSelect";

function Femsenior() {
  const [tabLabel, setTabLabel] = useState("NUEVO EVENTO");
  const { isAuthenticated, role } = useContext(AuthContext);
  const showDynamicTab = isAuthenticated && role === "FEMSENIOR";
  const [showSector, setShowSector] = useState(false);

  const [currentDate, setCurrentDate] = useState(new Date());

  const handleTabChange = (newLabel) => {
    setTabLabel(newLabel);
    if (newLabel === "SUBE TU CURRICULUM") {
      setShowSector(true);
    } else {
      setShowSector(false);
    }
  };

  console.log("Fecha actual seleccionada en Femsenior:", currentDate); 

  return (
    <div>
      <div className="header">
        <Manifest />
        <MonthlyCalendar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      </div>
      <div>
        <CardSection onTabChange={handleTabChange} />
        {showDynamicTab && (
          <DynamicTab
            label={tabLabel}
            onClick={() => handleTabChange(tabLabel)}
            showSector={showSector}
          />
        )}
        {isAuthenticated && !showDynamicTab && showSector && <SectorSelect />}
      </div>
      <Outlet context={{ currentDate }} />
    </div>
  );
}

export default Femsenior;
