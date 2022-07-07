import Logo from "./logo";
import Nav from "./navigate";
import InfoUser from "./user";

export default function SideBar() {
  return (
    <>
      <div className="siderBar-container padding">
        <Logo />
        <Nav />
        <InfoUser />
      </div>
    </>
  );
}
