import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Carousel, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import testImg from "../../assets/img/post.jpg";
import testImg2 from "../../assets/img/post2.jpg";
import { changeState } from "../../redux/reducers/stateModal";
import { RootState } from "../../redux/store";
import DateAndTime from "./date";

const arrImg = [
  {
    id: 1,
    url: testImg,
  },
  {
    id: 2,
    url: testImg2,
  },
];

export default function Settings() {
  const stateRedux = useSelector((state: RootState) => state.stateModal.state);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeState());
  };

  return (
    <>
      <div
        className={
          stateRedux
            ? "settings-container padding display-block"
            : "settings-container padding"
        }
      >
        <h2 className="title">Post Settings</h2>
        <div className="list-image">
          <p className="sub-title">
            Image
            <i className="icon-sub">
              <DeleteOutlined />
            </i>
          </p>
          <div className="images">
            <Carousel autoplay>
              {
                arrImg.map(img => (
                  <img key={img.id} src={img.url} alt="" />
                ))
              }
            </Carousel>
          </div>
        </div>
        <div className="description">
          <p className="sub-title">
            Description
            <i className="icon-sub">
              <EditOutlined />
            </i>
          </p>
          <div className="textArea">
            <Input.TextArea
              className="input-textarea"
              rows={5}
              value={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium odit minus obcaecati adipisci in quaerat earum mollitia esse perferendis hic necessitatibus tenetur quos possimus temporibus, itaque, aperiam expedita est ipsa?"
              }
              placeholder="Enter description ...."
            />
          </div>
        </div>
        <div className="dates">
          <p className="sub-title">
            Date off Posting
            <i className="icon-sub">
              <PlusSquareOutlined />
            </i>
          </p>
          <DateAndTime />
          <DateAndTime />
        </div>
        <div className="tags">
          <p className="sub-title">Tags</p>
          <button className="btn-global p-btn-tag bg-color-gradient">
            Party
            <i>
              <CloseCircleOutlined />
            </i>
          </button>
          <button className="btn-global p-btn-tag bg-color-gradient">
            Party
            <i>
              <CloseCircleOutlined />
            </i>
          </button>
          <button className="btn-global p-btn-tag bg-color-gradient">
            Party
            <i>
              <CloseCircleOutlined />
            </i>
          </button>
          <button className="btn-global p-btn-tag bg-color-gradient">
            Party
            <i>
              <CloseCircleOutlined />
            </i>
          </button>
          <button className="btn-global p-btn-tag bg-color-gradient">
            Party
            <i>
              <CloseCircleOutlined />
            </i>
          </button>
          <button className="btn-global p-btn-tag bg-color-gradient">
            Party
            <i>
              <CloseCircleOutlined />
            </i>
          </button>
        </div>
        <div className="save">
          <button className="btn-global p-btn-content">
            Save
            <i>
              <CheckCircleOutlined />
            </i>
          </button>
          <button
            className="btn-global p-btn-content ml-20 bg-red"
            onClick={handleClose}
          >
            Close
            <i>
              <CloseCircleOutlined />
            </i>
          </button>
        </div>
      </div>
    </>
  );
}
