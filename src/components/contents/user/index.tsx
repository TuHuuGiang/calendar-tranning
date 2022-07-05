import { PlusOutlined } from "@ant-design/icons";
import { arrUser } from "../arrUser";

export default function UserOnline() {
  return (
    <>
      <div className="contents__user-online">
        {arrUser.map((img) => (
          <img src={img.url} key={img.id} alt="" />
        ))}
        <button className="add-user">
          <PlusOutlined />
        </button>
      </div>
    </>
  );
}
