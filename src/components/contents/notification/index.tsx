import { RightSquareOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { arrUser } from "../arrUser";

export default function Notification() {
  return (
    <>
      <div className="contents__show-notification">
        <div className="div-global">
          <p className="title-notification">Last Month Highlight</p>
          <div className="notification-content">
            {arrUser.map((img) => (
              <img src={img.url} key={img.id} alt="" />
            ))}
            <Link to="/calendar" className="title-sub-notification ml-32px">
              Check out
              <i>
                <RightSquareOutlined />
              </i>
            </Link>
          </div>
        </div>
        <div className="div-global flex-20">
          <h1 className="quantity-notification">2</h1>
          <div className="notification-content">
            <span className="title-sub-notification">Schedule for today</span>
          </div>
        </div>
        <div className="div-global flex-20">
          <h1 className="quantity-notification">3</h1>
          <div className="notification-content">
            <span className="title-sub-notification">Post this week</span>
          </div>
        </div>
      </div>
    </>
  );
}
