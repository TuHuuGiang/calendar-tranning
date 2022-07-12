import { useNavigate } from "react-router-dom";
import { SITE_MAP } from "../../sideBar/navigate/navigateLink/site-map";

export default function CreatePost() {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate(SITE_MAP.CALENDAR.ACTIONS.pathCreate);
  };

  return (
    <>
      <div className="contents__create-post">
        <h2 className="title">Post Schedule</h2>
        <button className="btn-global p-btn-content" onClick={handleChange}>
          Create a Post
        </button>
      </div>
    </>
  );
}
