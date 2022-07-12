import FormPost from "./form";

interface ISettings {
  action?: string;
}

export default function Settings(props: ISettings) {
  return (
    <>
      <FormPost action={props.action} />
    </>
  );
}
