import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeState } from "../../../redux/reducers/stateModal";
import { RootState } from "../../../redux/store";

export default function CreatePost() {
  const navigate = useNavigate();
  const stateRedux = useSelector((state: RootState) => state.stateModal.state);
  const dispatch = useDispatch();

  const handleChange = () => {
    if (stateRedux) {
      dispatch(changeState(false));
      navigate("/calendar");
    } else {
      dispatch(changeState(true));
      navigate("create-post");
    }
  };

  return (
    <>
      <div className="contents__create-post">
        <h2 className="title">Post Schedule</h2>
        <button
          className={
            stateRedux
              ? "btn-global p-btn-content bg-red"
              : "btn-global p-btn-content"
          }
          onClick={handleChange}
        >
          {stateRedux ? "Close" : "Create a Post"}
        </button>
      </div>
    </>
  );
}
