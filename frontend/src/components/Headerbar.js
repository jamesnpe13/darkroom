import "./Headerbar.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logonav from "../images/logo-nav.png";

const Headerbar = () => {
    const path = useLocation().pathname;
    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        console.log(path);
        if (path === "/") {
            setCurrentPage("Home");
        }
        if (path === "/gallery") {
            setCurrentPage("Gallery");
        }
        if (path === "/createpost") {
            setCurrentPage("Create");
        }
        if (path === "/search") {
            setCurrentPage("Search");
        }
        if (path === "/profile") {
            setCurrentPage("My Profile");
        }
    }, [path]);

    return (
        <div className="headerbar">
            <img src={logonav} alt=""></img>
            <p>{currentPage}</p>
        </div>
    );
};

export default Headerbar;
