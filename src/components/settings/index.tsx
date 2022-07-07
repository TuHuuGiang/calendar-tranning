import { useParams } from "react-router-dom";
import FormPost from "./form";

export default function Settings() {
  const { actions } = useParams();

  return (
    <>
      {actions === "create-post" ? (
        <FormPost title="Create Post" />
      ) : (
        <FormPost title="Post Settings" />
      )}
    </>
  );
}
