import "./PostImg.scss"
import { useLocation } from "react-router-dom"
import PostFeed from "./PostFeed";


export default function PostImg({ postData }) {
    
    const location = useLocation();
    const { id } = location.state;
    console.log(id)

    return (
        <div className="post-img">
        
        <img className="fullimage"src={id}></img>
 
     
        {/* <main>
            <h2>{postData.title}</h2>
            <h3>{postData.username}</h3>
            <p>{postData.caption}</p>
         </main> */}

      </div>
    // <p>{id}</p>
    );
 }