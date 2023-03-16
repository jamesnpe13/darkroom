import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Headerbar from "./components/Headerbar";

import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CreatePost from "./pages/CreatePost";
import Search from "./pages/Search";
import { useEffect, useState } from "react";

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

    return (
        <div className="App">
            <BrowserRouter>
                <Headerbar />
                <Routes>
                    <Route path="/" element={<Home postsData={postsData} />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/createpost" element={<CreatePost />} />
                    <Route path="/search" element={<Search />} />

                    <Route path="*" element={<Notfound />} />
                </Routes>
                <NavBar />
            </BrowserRouter>
        </div>
    );
}

export default App;
