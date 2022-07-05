import Settings from "../../components/settings";
import { PlusOutlined, RightSquareOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import CreatePost from "../../components/contents/createPost";
import UserOnline from "../../components/contents/user";
import Notification from "../../components/contents/notification";
import Calendar from "../../components/contents/calendar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function CalendarPage() {
  const stateRedux = useSelector((state: RootState) => state.stateModal.state);

  return (
    <>
      {stateRedux ? (
        <>
          <div className="contents-container padding flex-66">
            <UserOnline />
            <CreatePost />
            <Notification />
            <Calendar />
          </div>
          <Settings />
        </>
      ) : (
        <>
          <div className="contents-container padding">
            <UserOnline />
            <CreatePost />
            <Notification />
            <Calendar />
          </div>
          <Settings />
        </>
      )}
      {/* <div className="contents-container padding">
        <UserOnline />
        <CreatePost />
        <Notification />
        <Calendar />
      </div> */}
      {/* {stateRedux ? <Settings /> : ""} */}
      {/* <Settings /> */}
    </>
  );
}
