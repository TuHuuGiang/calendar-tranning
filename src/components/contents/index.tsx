import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Contents() {
  const stateRedux = useSelector((state: RootState) => state.stateModal.state);

  return (
    <>
      {stateRedux ? (
        <div className="contents-container flex-66">
          <h4>Contents</h4>
        </div>
      ) : (
        <div className="contents-container">
          <h4>Contents</h4>
        </div>
      )}
    </>
  );
}
