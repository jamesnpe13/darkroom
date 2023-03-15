import "./App.scss";
import {
    BrowserRouter,
    Route,
    Router,
    Routes,
    useLocation,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Headerbar from "./components/Headerbar";

import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import PostImg from "./components/Post/PostImg";
import Editpost from "./pages/Editpost";

function App() {
    //  const [currentPage, setCurrentPage] = useState(useLocation);

    return (
        <div className="App">
         {/* <BrowserRouter> */}
            <Headerbar />
            <Routes>
               <Route path="/" element={<Home />} /> <Route path="/post/img/" element={<PostImg />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/editpost" element={<Editpost />} />
               <Route path="*" element={<Notfound />} />
              
            </Routes>
         {/* </BrowserRouter> */}

         <NavBar />
      </div>
   );
}

export default App;
