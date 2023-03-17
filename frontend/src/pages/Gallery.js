import "./Gallery.scss";
import GalleryCard from "../components/GalleryCard";

export default function Gallery({ postsData }) {
    // console.log(postsData);
    return (
        <div className="gallery page">
            <GalleryCard postsData={postsData} />
            {postsData.map((item) => {
                return <GalleryCard key={item._id} postData={item} />;
            })}
        </div>
    );
}
