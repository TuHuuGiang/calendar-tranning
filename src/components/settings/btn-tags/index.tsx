import { CloseCircleOutlined } from "@ant-design/icons";

interface ITag {
    nameTag: string;
}

export default function Tag(props: ITag) {
  return (
    <>
      <button className="btn-global p-btn-tag bg-color-gradient">
        {props.nameTag}
        <i>
          <CloseCircleOutlined />
        </i>
      </button>
    </>
  );
}
