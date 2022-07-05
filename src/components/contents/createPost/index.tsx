import { useDispatch } from "react-redux";
import { changeState } from "../../../redux/reducers/stateModal";

export default function CreatePost() {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeState());
  }

  return (
    <>
      <div className="contents__create-post">
        <h2 className="title">Post Schedule</h2>
        <button className="btn-global p-btn-content" onClick={handleChange}>Create a Post</button>
      </div>
    </>
  );
}
