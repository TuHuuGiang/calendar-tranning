import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

// interface IInfoCalendar {
//   event: {
//     _def: {
//       title: string;
//       publicId: string | number;
//       extendedProps: {
//         description: string;
//         arrImg: [];
//       };
//     };
//     start: string;
//   };
// }

interface ICalendar {
  onDateClick: () => void;
  onEventClick: (info: any) => void;
  listEvent: [];
}

export default function Calendar(props: ICalendar) {
  const renderEventContent = (eventInfo: any) => {
    const props = eventInfo.event.extendedProps;
    return <img src={props.arrImg[0]} alt="" />;
  };

  return (
    <>
      <div className="calendar-container">
        <FullCalendar
          eventContent={renderEventContent}
          dateClick={props.onDateClick}
          events={props.listEvent}
          selectable={true}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          firstDay={1}
          eventClick={props.onEventClick}
        />
      </div>
    </>
  );
}
