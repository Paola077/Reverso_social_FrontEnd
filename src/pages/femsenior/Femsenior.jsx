import React , { useState, useContext, useEffect }  from "react";
import { Outlet, useLocation } from "react-router-dom";
import Manifest from "../../components/sections/manifest/Manifest";
import CardSection from "../../components/cards/cardSection/CardSection";
import MonthlyCalendar from "../../components/calendar/Calendar";
import DynamicTab from "../../components/tab/dynamicTab/DynamicTab";
import { AuthContext } from "../../context/AuthContext"; 
import "./_Femsenior.scss";
feature/alertLogin
import Alert from "../../components/modal/alerts/Alert";
import SectorSelect from "../../components/tab/tabBySector/SectorSelect"; dev

function Femsenior() {
  const location = useLocation();
  const [tabLabel, setTabLabel] = useState("NUEVO EVENTO");
  const { isAuthenticated, role } = useContext(AuthContext);
  const showDynamicTab = isAuthenticated && role === "FEMSENIOR";
 feature/alertLogin
  const [isAlertOpen, setIsAlertOpen] = useState(location.state?.showWelcomeAlert || false);

  useEffect(() => {
    if (location.state?.showWelcomeAlert) {
      setIsAlertOpen(true);
    }
  }, [location.state]);

  useEffect(() => {
    if (isAlertOpen) {
      const timer = setTimeout(() => {
        setIsAlertOpen(false);
      }, 5000); 
      return () => clearTimeout(timer); 
    }
  }, [isAlertOpen]);

  const [showSector, setShowSector] = useState(false); 
 dev

  const handleTabChange = (newLabel) => {
    setTabLabel(newLabel);
    if (newLabel === "SUBE TU CURRICULUM") {
      setShowSector(true);
    } else {
      setShowSector(false);
    }
  };
  return (
    <div>
       {isAlertOpen && (
        <Alert 
          isOpen={isAlertOpen}
          onclose={() => setIsAlertOpen(false)}
          alert="¡Bienvenida a la comunidad!"
        />
      )}
      <div className="header">
        <Manifest />
        <MonthlyCalendar />
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
        {isAuthenticated && !showDynamicTab && showSector && (
          <SectorSelect />
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Femsenior;
