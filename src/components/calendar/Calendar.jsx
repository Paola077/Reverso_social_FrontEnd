import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  format,
  parse,
  startOfWeek,
  getDay,
  addMonths,
  subMonths,
} from "date-fns";
import { es } from "date-fns/locale";
import { useState } from "react";

const locales = {
  es: es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: es }),
  getDay,
  locales,
});

const MonthlyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const renderToolbar = () => {
    const monthLabel = format(currentDate, "MMMM", { locale: es });
    return (
      <div
        className="custom-toolbar"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <button
          onClick={goToPreviousMonth}
          style={{
            fontSize: "1.5rem",
            marginRight: "1.25rem",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          {"<"}
        </button>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {monthLabel}
        </span>
        <button
          onClick={goToNextMonth}
          style={{
            fontSize: "1.5rem",
            marginLeft: "1.25rem",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          {">"}
        </button>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "28rem",
        height: "22rem",
        margin: "0 auto",
      }}
    >
      {renderToolbar()}
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        date={currentDate}
        onNavigate={setCurrentDate}
        views={["month"]}
        toolbar={false}
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
          color: "black",
        }}
        messages={{
          noEventsInRange: "No hay eventos en este rango",
        }}
        components={{
          month: {
            header: () => null,
          },
        }}
      />
    </div>
  );
};

export default MonthlyCalendar;
