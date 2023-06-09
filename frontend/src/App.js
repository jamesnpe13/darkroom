// libraries
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import Headerbar from "./components/Headerbar";

// page router
import PageRouter from "./Router";

function App() {
   const [postsData, setPostsData] = useState([]);

   useEffect(() => {
      fetchAllPosts();
   }, []);

   useEffect(() => {}, [postsData]);

   function fetchAllPosts() {
      // this is a test comment
      // this is another comment

      // this is a test comment from main
      // this is a test comment

      // this is a test comment from branch
      // this is a test comment from main

      // this is a test comment from branch

      // this is a test comment from branch
      // this is a test comment from main
      
      // this is a comment from main
      // this is a test comment from branch
      fetch("http://localhost:5000/posts/allposts", {
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
      })
         .then((response) => response.json())
         .then((apiData) => {
            const apiDataReverse = [...apiData.reverse()];
            setPostsData(apiDataReverse);
         });
   }

   return (
      <div className="App">
         <BrowserRouter>
            <Headerbar />
            <PageRouter postsData={postsData} fetchAllPosts={fetchAllPosts} />
            <NavBar />
         </BrowserRouter>
      </div>
   );
}

export default App;
