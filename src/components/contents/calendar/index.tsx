import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../../redux/reducers/stateModal";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { saveInfo } from "../../../redux/reducers/infoEvent";
import moment from "moment";

export default function Calendar() {
  const navigate = useNavigate();
  const postList = useSelector((state: RootState) => state.postList.postList);
  const dispatch = useDispatch();
  let [events, setEvents] = useState<any>([...postList]);

  useEffect(() => {
    setEvents(postList);
  }, [postList]);

  const renderEventContent = (eventInfo: any) => {
    const props = eventInfo.event.extendedProps;
    return <img src={props.arrImg[0]} alt="" />;
  };

  const addEvent = () => {
    dispatch(changeState(true));
    navigate("create-post");
  };

  const showEnvent = (info: any) => {
    dispatch(changeState(true));
    navigate("settings");
    let date = moment(new Date(info.event.start)).format("YYYY-MM-DD");
    let valueEvent = {
      id: info.event._def.publicId,
      title: info.event._def.title,
      arrImg: info.event._def.extendedProps.arrImg,
      description: info.event._def.extendedProps.description,
      start: date,
    };
    dispatch(saveInfo(valueEvent));
  };

  return (
    <>
      <div className="calendar-container">
        <FullCalendar
          eventContent={renderEventContent}
          dateClick={addEvent}
          events={events}
          selectable={true}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          firstDay={1}
          eventClick={showEnvent}
        />
      </div>
    </>
  );
}
