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
            <PageRouter postsData={postsData} />
            <NavBar />
         </BrowserRouter>
      </div>
   );
}

export default App;
