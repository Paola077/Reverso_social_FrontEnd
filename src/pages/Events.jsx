import React from "react";
import EventCard from "../components/cards/eventCard/EventCard"

function Events() {
  return <div>
    <EventCard
          title="TITULO EVENTO"
          location="ONLINE"
          date="00/00/0000"
          time="00:00h"
          details="Zoom"
        />
  </div>;
}

export default Events;
