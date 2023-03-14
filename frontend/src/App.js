import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Headerbar from "./components/Headerbar";


import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import PostImg from "./components/Post/PostImg";

function App() {
   return (
      <div className="App">
         <Headerbar />

         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/post/img/" element={<PostImg />} />
            
               <Route path="*" element={<Notfound />} />
            </Routes>
         </BrowserRouter>

         <Navbar />
      </div>
   );
}

export default App;
