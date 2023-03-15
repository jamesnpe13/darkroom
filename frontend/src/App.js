import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Headerbar from "./components/Headerbar";

import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CreatePost from "./pages/CreatePost";

function App() {
   //  const [currentPage, setCurrentPage] = useState(useLocation);

   return (
      <div className="App">
         <BrowserRouter>
            <Headerbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/createpost" element={<CreatePost />} />
               <Route path="*" element={<Notfound />} />
            </Routes>
            <NavBar />
         </BrowserRouter>
      </div>
   );
}

export default App;
