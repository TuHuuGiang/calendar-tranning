import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./setting.scss";

import imgTest from "../../../assets/img/user.jpg";
import { useState } from "react";

export default function Calendar() {
  let [events, setEvents] = useState<any>([]);

  const renderEventContent = (eventInfo: any) => {
    console.log(123456)
    const props = eventInfo.event.extendedProps;
    return <img src={imgTest} alt="" />;
  };

  const addEvent = (e: any) => {
    console.log(e);
    
    let event = {
      title: "Event 1",
      date: e.dateStr  
    };

    setEvents((prev: any) => [...prev, event]);
  };

  return (
    <>
      <div className="calendar-container">
        <FullCalendar
          eventContent={renderEventContent}
          dateClick={addEvent}
          events={events}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          firstDay={1}
        />
      </div>
    </>
  );
}
