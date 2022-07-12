import Settings from "../../components/settings";
import CreatePost from "../../components/contents/btnCreatePost";
import UserOnline from "../../components/contents/user";
import Notification from "../../components/contents/notification";
import Calendar from "../../components/contents/calendar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SITE_MAP } from "../../components/sideBar/navigate/navigateLink/site-map";
import { saveInfo } from "../../redux/reducers/infoEvent";
import moment from "moment";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";

interface IInfoCalendar {
  event: {
    _def: {
      title: string;
      publicId: string | number;
      extendedProps: {
        description: string;
        arrImg: string[];
      };
    };
    start: string;
  };
}

export default function CalendarPage() {
  const { actions } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postList = useSelector((state: RootState) => state.postList.postList);
  let [events, setEvents] = useState<any>([...postList]);

  useEffect(() => {
    setEvents(postList);
  }, [postList]);

  const dateClick = () => {
    navigate(SITE_MAP.CALENDAR.ACTIONS.pathCreate);
  };

  const showEvent = (info: IInfoCalendar) => {
    navigate(SITE_MAP.CALENDAR.ACTIONS.pathSetting);
    let date = moment(new Date(info.event.start)).format("YYYY-MM-DD");
    let valueEvent = {
      id: info.event._def.publicId,
      title: info.event._def.title,
      arrImg: info.event._def.extendedProps.arrImg,
      description: info.event._def.extendedProps.description,
      start: date,
    };
    console.log('info', valueEvent)
    dispatch(saveInfo(valueEvent));
  };

  return (
    <>
      <>
        <div
          className={`contents-container padding ${actions ? "flex-66" : ""}`}
        >
          <UserOnline />
          <CreatePost />
          <Notification />
          <Calendar
            onDateClick={dateClick}
            onEventClick={showEvent}
            listEvent={events}
          />
        </div>
        <Settings action={actions} />
      </>
    </>
  );
}
