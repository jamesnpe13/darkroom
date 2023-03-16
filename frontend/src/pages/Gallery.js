import "./Gallery.scss";
import GalleryCard from "../components/GalleryCard";

export default function Gallery() {
    return (
        <div className="gallery page">
            <h1 className="gallery-time">Today</h1>
            <GalleryCard />
            <h1 className="gallery-time">Yesterday</h1>
        </div>
    );
}
