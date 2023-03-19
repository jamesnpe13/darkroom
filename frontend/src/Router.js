import { Routes, Route } from "react-router-dom";

// pages
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Search from "./pages/Search";
import SplashAnimation from "./pages/SplashAnimation";

export default function PageRouter({ postsData, fetchAllPosts }) {
   return (
      <Routes>
         <Route path="/" element={<SplashAnimation postsData={postsData} />} />
         <Route path="/home" element={<Home postsData={postsData} />} />
         <Route path="/gallery" element={<Gallery postsData={postsData} />} />
         <Route path="/gallery/:id" element={<EditPost postsData={postsData} fetchAllPosts={fetchAllPosts} />} />
         <Route path="/createpost" element={<CreatePost fetchAllPosts={fetchAllPosts} />} />
         <Route path="/search" element={<Search />} />
         <Route path="*" element={<Notfound />} />
      </Routes>
   );
}
