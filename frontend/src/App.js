import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Headerbar from "./components/Headerbar";

import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
   return (
      <div className="App">
         <Headerbar />

         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="*" element={<Notfound />} />
            </Routes>
         </BrowserRouter>

         <Navbar />
      </div>
   );
}

export default App;
