import avatar from "../../../assets/img/user.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function InfoUser() {
  return (
    <>
      <div className="div-global">
        <div className="user__avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="user__info">
          <h4 className="name">Từ Hữu Giang</h4>
          <span className="tag">@tuhuugiang</span>
        </div>
        <div className="button">
          <button className="btn-global p-btn-sidebar">
            <i className="btn-icon">
              <ArrowRightOutlined />
            </i>
            Sign out
          </button>
        </div>
      </div>
    </>
  );
}
