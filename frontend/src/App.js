//libraries
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import Headerbar from "./components/Headerbar";

// pages
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

import PostImg from "./components/Post/PostImg";

function App() {
   const [postsData, setPostsData] = useState([]);

   useEffect(() => {
      fetchAllPosts();
   }, []);

   useEffect(() => {}, [postsData]);

   function fetchAllPosts() {
      fetch("http://localhost:5000/posts", {
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
      })
         .then((response) => response.json())
         .then((apiData) => {
            setPostsData(apiData);
         });
   }

   return (
      <div className="App">
         <BrowserRouter>
            <Headerbar />
            <Routes>
               <Route path="/" element={<Home postsData={postsData} />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/createpost" element={<CreatePost />} />
               <Route path="/gallery/editpost" element={<EditPost />} />

               <Route path="*" element={<Notfound />} />
            </Routes>
            <NavBar />
         </BrowserRouter>
      </div>
   );
}

export default App;
