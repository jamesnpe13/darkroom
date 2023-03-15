import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Headerbar from "./components/Headerbar";

import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CreatePost from "./pages/CreatePost";
import { useEffect, useState } from "react";
import PostImg from "./components/Post/PostImg";
import Editpost from "./pages/Editpost";

function App() {
   const [postsData, setPostsData] = useState([]);

   useEffect(() => {
      fetchAllPosts();
   }, []);

   useEffect(() => {}, [postsData]);

   function fetchAllPosts() {
      fetch("/posts", {
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

   retur(
      <div className="App">
         <BrowserRouter>
            <Headerbar />
            <Routes>
               <Route path="/" element={<Home postsData={postsData} />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/createpost" element={<CreatePost />} />
               <Route path="/editpost/:postid" element={<Editpost />} />
               <Route path="*" element={<Notfound />} />
            </Routes>
            <NavBar />
         </BrowserRouter>
      </div>
   );
}

export default App;
