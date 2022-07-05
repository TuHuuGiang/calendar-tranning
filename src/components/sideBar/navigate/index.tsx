import { NavLink } from "react-router-dom";
import { navLink } from "./navigateLink";


export default function Nav() {
    return (
        <>
            <div className="sideBar__nav">
                <ul className="nav">
                    {
                        navLink.map((link, index) => (
                            <li className="nav-link" key={index}>
                                <NavLink to={link.path}>
                                    <i className="link-icon">{link.icon}</i>
                                    {link.title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}