import { DatePicker, DatePickerProps, TimePicker } from "antd";
import moment from "moment";

interface IDateAndTime {
  name: string;
  propsValue: string;
  propsFormik: any;
}

export default function DateAndTime(props: IDateAndTime) {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    props.propsFormik.setFieldValue("dateFormik", dateString);
  };

  return (
    <>
      <div className="dates-content">
        <DatePicker
          value={props.propsValue ? moment(props.propsValue) : null}
          onChange={onChange}
        />
        <i className="dot-icon fa-solid fa-circle"></i>
        <TimePicker />
      </div>
    </>
  );
}
