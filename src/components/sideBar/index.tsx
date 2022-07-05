import logo from "../../assets/img/logoo.png";
import Nav from "./navigate";
import InfoUser from "./user";

export default function SideBar() {
  return (
    <>
      <div className="siderBar-container padding">
        <div className="sideBar__logo">
          <img src={logo} alt="" />
        </div>
        <Nav />
        <InfoUser />
      </div>
    </>
  );
}
