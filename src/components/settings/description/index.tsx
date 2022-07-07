import { Input } from "antd";

export default function Description() {
  return (
    <>
      <div className="textArea">
        <Input.TextArea
          className="input-textarea"
          rows={5}
          placeholder="Enter description ...."
        />
      </div>
    </>
  );
}
