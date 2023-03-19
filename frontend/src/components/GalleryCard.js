import "./GalleryCard.scss";
import { Link } from "react-router-dom";
import placeholderImg from "../images/placeholder.png";

const GalleryCard = ({ postData }) => {
   if (postData !== undefined) {
      return (
         <Link to={`/gallery/${postData._id}`}>
            <div className="gallery-card">
               <div className="card-writing">
                  <h3 className="card-title">{postData.title}</h3>
                  {/* <p className="card-description">{postData.caption}</p> */}
               </div>
               <img src={postData.img_url || placeholderImg} alt=""></img>
            </div>
         </Link>
      );
   }
};

export default GalleryCard;
