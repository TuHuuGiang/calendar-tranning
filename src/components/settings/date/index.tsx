import { DatePicker, DatePickerProps, TimePicker } from "antd";
import moment from "moment";

export default function DateAndTime(props: any) {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    if (props.getDate) {
      props.getDate(dateString);
    }
  };
  
  return (
    <>
      <div className="dates-content">
        <DatePicker value={props.propsDate ? moment(props.propsDate) : null} onChange={onChange} />
        <i className="dot-icon fa-solid fa-circle"></i>
        <TimePicker />
      </div>
    </>
  );
}