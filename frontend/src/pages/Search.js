import "./Search.scss";
import GalleryCard from "../components/GalleryCard";
export default function Search() {
    return (
        <div className="search-post">
            <input type="text" placeholder="Search..." className="searchbar" />
            <div className="search-hist-cont">
                <h1 className="search-history">Recent searches</h1>
            </div>
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
        </div>
    );
}
