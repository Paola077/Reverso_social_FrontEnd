import React from "react";
import { Outlet } from "react-router-dom";
import Manifest from "../components/sections/manifest/Manifest";
import ManifestButton from "../components/buttons/manifestButton/ManifestButton";
import CardSection from "../components/cards/cardSection/CardSection";
import EventCard from "../components/cards/eventCard/EventCard";

function Femsenior() {
  return (
    <>
      <div className="manifestContainer">
        <Manifest />
        <ManifestButton />
      </div>
      <div>
        <CardSection />
        <EventCard
          title="TITULO EVENTO"
          location="ONLINE"
          date="00/00/0000"
          time="00:00h"
          details="Zoom"
        />
      </div>
      <Outlet />
    </>
  );
}

export default Femsenior;
