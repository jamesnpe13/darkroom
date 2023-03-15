import { NavLink } from "react-router-dom";
import "./NavBar.scss";
const NavBar = () => {
    return (
        <nav>
            <div className="bottom-nav">
                <NavLink to="/">
                    <img src={"images/home.png"} alt=""></img>
                </NavLink>
                <NavLink to="/gallery">
                    <img src={"images/gallery.png"} alt=""></img>
                </NavLink>
                <NavLink to="/createpost">
                    <img src={"images/create.png"} alt=""></img>
                </NavLink>
                <NavLink to="/search">
                    <img src={"images/search.png"} alt=""></img>
                </NavLink>
                <NavLink to="/profile">
                    <img src={"images/profile.png"} alt=""></img>
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
