import "./Headerbar.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// const GalleryPage = (URL = "http://localhost:3001/gallery");
console.log(window.location.pathname);

const Headerbar = () => {
    //  const [path, setPath] = useState(window.location.pathname);
    //  const [currentPage, setCurrentPage] = useState("");

    //  useEffect(() => {
    //      if (window.location.pathname === "/gallery") {
    //          setCurrentPage("Gallery");
    //      }
    //      if (window.location.pathname === "/") {
    //          setCurrentPage("Home");
    //      }
    //  }, [path]);

    return (
        <div className="headerbar">
            <img src={"images/logo-nav.png"} alt=""></img>
            {/* <p>{currentPage}</p> */}
        </div>
    );
};

export default Headerbar;
