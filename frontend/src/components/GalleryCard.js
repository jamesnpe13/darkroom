import "./GalleryCard.scss";

const GalleryCard = () => {
    return (
        <div className="gallery page">
            <h1 className="day">Today</h1>
            <div className="gallery-card">
                <div>
                    <p className="card-title">Post Title </p>{" "}
                    {/* api title goes here */}
                    <p className="card-description">
                        {/* api description goes here */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt maxime sequi atque.
                    </p>
                </div>
                <div>
                    <img src={"./images/placeholder-image.png"} alt=""></img>{" "}
                    {/* api image goes here */}
                </div>
            </div>
            <h1 className="day">Yesterday</h1>
        </div>
    );
};

export default GalleryCard;
