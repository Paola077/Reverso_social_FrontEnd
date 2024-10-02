import React from "react";
import { Outlet } from "react-router-dom";
import Manifest from "../../components/sections/manifest/Manifest";
import ManifestButton from "../../components/buttons/manifestButton/ManifestButton";
import CardSection from "../../components/cards/cardSection/CardSection";
import MonthlyCalendar from "../../components/calendar/Calendar";
import "./_Femsenior.scss";

function Femsenior() {
  return (
    <div>
      <div className="header">
        <Manifest />
        <MonthlyCalendar />
      </div>
      <div>
        <CardSection />
      </div>
      <Outlet />
    </div>
  );
}

export default Femsenior;
