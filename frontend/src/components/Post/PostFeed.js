import PostImg from "./PostImg";
import "./PostFeed.scss";
import { Link, NavLink, useParams } from "react-router-dom";

export default function PostFeed({ postData }) {
   function ClickHandler() {
      return <PostImg postData={postData} />;
   }
   return (
      <div className="post-feed">
         {/* <Link to={`/gallery/${postData._id}`}> */}
            <img src={postData.img_url} alt="" />
         {/* </Link> */}
         <main>
            <h2>{postData.title}</h2>
            <h3>{postData.username}</h3>
            <p>{postData.caption}</p>
         </main>
         <footer>
            <span>{postData.date}</span>
            <span>Likes {postData.likes}</span>
         </footer>
      </div>
   );
}
