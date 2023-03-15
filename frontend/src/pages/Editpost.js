import "./Editpost.scss"
import { useEffect, useState } from "react";


const Editpost = ({ postData }) => {
    
   return (
      <div className="page edit-post">
         <img src={postData.img_url} alt="" />
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
};

export default Editpost;




