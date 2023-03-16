import "./GalleryCard.scss";

const GalleryCard = ({ postData }) => {
    {
        if (postData != undefined) {
            return (
                <div className="gallery-card">
                    <div className="card-writing">
                        <p className="card-title">{postData.title}</p>
                        <p className="card-description">{postData.caption}</p>
                    </div>
                    <div>
                        <img src={postData.img_url} alt=""></img>{" "}
                    </div>
                </div>
            );
        }
    }
};

export default GalleryCard;
