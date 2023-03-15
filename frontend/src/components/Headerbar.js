import "./Headerbar.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
   }, [path]);
   return (
      <div className="headerbar">
         <img src={"images/logo-nav.png"} alt=""></img>
         <p>{currentPage}</p>
      </div>
   );
};

export default Headerbar;
