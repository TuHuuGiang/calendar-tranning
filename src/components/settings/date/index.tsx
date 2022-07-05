import { DatePicker, TimePicker } from "antd";

export default function DateAndTime() {
  return (
    <>
      <div className="dates-content">
        <DatePicker />
        <i className="dot-icon fa-solid fa-circle"></i>
        <TimePicker />
      </div>
    </>
  );
}
