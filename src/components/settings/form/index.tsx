import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Carousel, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeState } from "../../../redux/reducers/stateModal";
import { RootState } from "../../../redux/store";
import DateAndTime from "../date";
import UploadImg from "../upload";
import { useEffect, useState } from "react";
import { addPost, editPost } from "../../../redux/reducers/posts";

interface IProps {
  title: string;
}

export default function FormPost(props: IProps) {
  const stateRedux = useSelector((state: RootState) => state.stateModal.state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { actions } = useParams();

  const [date, setDate] = useState<string>("");
  const [img, setImg] = useState<string[]>([]);
  const [desc, setDesc] = useState<string>("");
  const valueInfo = useSelector((state: RootState) => state.info.info);

  useEffect(() => {
    setValue();
  }, [valueInfo]);

  const setValue = () => {
    setImg(valueInfo.arrImg);
    setDesc(valueInfo.description);
    setDate(valueInfo.start);
  };

  const handleClose = () => {
    dispatch(changeState(false));
    navigate("/calendar");
    setImg([]);
    setDesc("");
    setDate("");
  };

  const getImage = (img: string) => {
    setImg([img]);
  };

  const getDate = (date: string) => {
    setDate(date);
  };

  const handleSave = () => {
    if (actions === "create-post") {
      let postAdd = {
        id: Date.now(),
        title: "",
        arrImg: [img],
        description: desc,
        start: date,
      };
      dispatch(addPost(postAdd));
      dispatch(changeState(false));
    } else {
      let postEdit = {
        id: valueInfo.id,
        title: "",
        arrImg: [img],
        description: desc,
        start: date,
      };
      dispatch(editPost(postEdit));
      dispatch(changeState(false));
    }
    setImg([]);
    setDesc("");
    setDate("");
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
        <h2 className="title">{props.title}</h2>
        <div className="list-image">
          <p className="sub-title">
            Image
            <i className="icon-sub">
              <DeleteOutlined />
            </i>
          </p>
          <div className="images">
            {actions === "create-post" ? (
              <UploadImg getImage={getImage} />
            ) : (
              <Carousel autoplay>
                {img.map((img, index) => (
                  <img className="img-settings" key={index} src={img} alt="" />
                ))}
              </Carousel>
            )}
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
              value={desc}
              placeholder="Enter description ...."
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>
        <div className="dates">
          <p className="sub-title">
            Date of Posting
            <i className="icon-sub">
              <PlusSquareOutlined />
            </i>
          </p>
          <DateAndTime propsDate={date} getDate={getDate} />
          {/* <DateAndTime /> */}
        </div>
        <div className="tags">
          <p className="sub-title">Tags</p>
          <div className="tag-content">
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
        </div>
        <div className="save">
          <button className="btn-global p-btn-content" onClick={handleSave}>
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
