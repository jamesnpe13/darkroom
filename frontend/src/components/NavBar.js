import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import create from "../images/create.png";
import gallery from "../images/gallery.png";
import home from "../images/home.png";
import profile from "../images/profile.png";
import search from "../images/search.png";

const NavBar = () => {
    return (
        <nav>
            <div className="bottom-nav">
                <NavLink to="/">
                    <img src={home} alt=""></img>
                </NavLink>
                <NavLink to="/gallery">
                    <img src={gallery} alt=""></img>
                </NavLink>
                <NavLink to="/createpost">
                    <img className="create-post-btn" src={create} alt=""></img>
                </NavLink>
                <NavLink to="/search">
                    <img src={search} alt=""></img>
                </NavLink>
                <NavLink to="/profile">
                    <img src={profile} alt=""></img>
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
