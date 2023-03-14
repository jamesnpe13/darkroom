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
import { useState } from "react";

function App() {
    //  const [currentPage, setCurrentPage] = useState(useLocation);

    return (
        <div className="App">
            <Headerbar />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
                <NavBar />
            </BrowserRouter>
        </div>
    );
}

export default App;
