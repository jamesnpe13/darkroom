import { Routes, Route } from "react-router-dom";

// pages
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Search from "./pages/Search";

export default function PageRouter({ postsData }) {
   return (
      <Routes>
         <Route path="/" element={<Home postsData={postsData} />} />
         <Route path="/gallery" element={<Gallery postsData={postsData} />} />
         <Route path="/gallery/:id" element={<EditPost postsData={postsData} />} />
         <Route path="/createpost" element={<CreatePost />} />
         <Route path="/search" element={<Search />} />
         <Route path="*" element={<Notfound />} />
      </Routes>
   );
}
