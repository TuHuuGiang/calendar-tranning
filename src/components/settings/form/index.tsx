import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../redux/store";
import DateAndTime from "../date";
import UploadImg from "../upload";
import { useEffect, useState } from "react";
import { addPost, editPost } from "../../../redux/reducers/posts";
import { SITE_MAP } from "../../sideBar/navigate/navigateLink/site-map";
import Tag from "../btn-tags";
import { Formik, Field } from "formik";
import * as yup from "yup";
// import { validations } from "./validate";

interface IFormPost {
  action?: string;
}

interface IFormSettings {
  uploadFormik: string;
  descFormik: string;
  dateFormik: string;
}

export default function FormPost(props: IFormPost) {
  const valueInfo = useSelector((state: RootState) => state.info.info);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [date, setDate] = useState<string>("");
  const [img, setImg] = useState<string[]>([]);
  const [desc, setDesc] = useState<string>("");

  const validations = yup.object({
    uploadFormik:
      props.action === SITE_MAP.CALENDAR.ACTIONS.pathCreate
        ? yup.string().required("Required")
        : yup.string(),
    descFormik:
      props.action === SITE_MAP.CALENDAR.ACTIONS.pathCreate
        ? yup.string().required("Required")
        : yup.string(),
    dateFormik:
      props.action === SITE_MAP.CALENDAR.ACTIONS.pathCreate
        ? yup.string().required("Required")
        : yup.string(),
  });

  const initialValues: IFormSettings = {
    uploadFormik: "",
    descFormik: "",
    dateFormik: "",
  };

  useEffect(() => {
    setValue();
  }, [valueInfo]);

  const setValue = () => {
    setImg(valueInfo.arrImg);
    setDesc(valueInfo.description);
    setDate(valueInfo.start);
  };

  const handleClose = () => {
    navigate(SITE_MAP.CALENDAR.path);
    setImg([]);
    setDesc("");
    setDate("");
  };

  const handleSave = (values: any) => {
    if (props.action === SITE_MAP.CALENDAR.ACTIONS.pathCreate) {
      let postAdd = {
        id: Date.now(),
        title: "",
        arrImg: [values.uploadFormik],
        description: values.descFormik,
        start: values.dateFormik,
      };
      dispatch(addPost(postAdd));
      navigate(SITE_MAP.CALENDAR.path);
    } else {
      let postEdit = {
        id: valueInfo.id,
        title: "",
        arrImg: [img],
        description: values.descFormik || desc,
        start: values.dateFormik || date,
      };
      console.log(postEdit);
      dispatch(editPost(postEdit));
      navigate(SITE_MAP.CALENDAR.path);
    }
    setImg([]);
    setDesc("");
    setDate("");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validations}
        onSubmit={(values, { resetForm }) => {
          console.log("24", values);
          handleSave(values);
          resetForm();
        }}
      >
        {(formik) => (
          <div
            className={`settings-container padding ${
              props.action ? "display-block" : ""
            }`}
          >
            <h2 className="title">
              {props.action === SITE_MAP.CALENDAR.ACTIONS.pathCreate
                ? "Create Post"
                : "Settings Post"}
            </h2>
            <div className="list-image">
              <p className="sub-title">
                Image
                <i className="icon-sub">
                  <DeleteOutlined />
                </i>
              </p>
              <div className="images">
                {props.action === SITE_MAP.CALENDAR.ACTIONS.pathCreate ? (
                  <UploadImg
                    name="uploadFormik"
                    propsFormik={formik}
                    propsValue={formik.values.uploadFormik}
                  />
                ) : (
                  <Carousel autoplay>
                    {img.map((img, index) => (
                      <img
                        className="img-settings"
                        key={index}
                        src={img}
                        alt=""
                      />
                    ))}
                  </Carousel>
                )}
              </div>
              {props.action === SITE_MAP.CALENDAR.ACTIONS.pathCreate &&
              formik.errors.uploadFormik &&
              formik.touched.uploadFormik ? (
                <p className="errorMsg">{formik.errors.uploadFormik}</p>
              ) : null}
            </div>
            <div className="description">
              <p className="sub-title">
                Description
                <i className="icon-sub">
                  <EditOutlined />
                </i>
              </p>
              <div className="textArea">
                <Field
                  component="textarea"
                  className="input-textarea"
                  id="descFormik"
                  name="descFormik"
                  rows={5}
                  value={formik.values.descFormik || desc}
                  placeholder="Enter description ...."
                />
                {formik.errors.descFormik && formik.touched.descFormik ? (
                  <p className="errorMsg">{formik.errors.descFormik}</p>
                ) : null}
              </div>
            </div>
            <div className="dates">
              <p className="sub-title">
                Date of Posting
                <i className="icon-sub">
                  <PlusSquareOutlined />
                </i>
              </p>
              <DateAndTime
                name="dateFormik"
                propsValue={formik.values.dateFormik || date}
                propsFormik={formik}
              />
              {formik.errors.dateFormik && formik.touched.dateFormik ? (
                <p className="errorMsg">{formik.errors.dateFormik}</p>
              ) : null}
              {/* <DateAndTime /> */}
            </div>
            <div className="tags">
              <p className="sub-title">Tags</p>
              <div className="tag-content">
                <Tag nameTag="Party" />
                <Tag nameTag="Dancing" />
                <Tag nameTag="Mood" />
                <Tag nameTag="Girl" />
                <Tag nameTag="Boy" />
                <Tag nameTag="Thoughts" />
              </div>
            </div>
            <div className="save">
              <button
                className="btn-global p-btn-content"
                type="submit"
                onClick={formik.submitForm}
              >
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
        )}
      </Formik>
    </>
  );
}
