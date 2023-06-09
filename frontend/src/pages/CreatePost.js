import "./CreatePost.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UploadIcon from "../images/upload.png";
import axios from "axios";
import placeholderImg from "../images/placeholder.png";

export default function CreatPost({ fetchAllPosts }) {
   const [newPostData, setNewPostData] = useState({});
   const [postImage, setPostImage] = useState("");
   const navigate = useNavigate();

   function randomImg() {
      const imgurlarray = [];
      imgurlarray[0] = "https://storage.googleapis.com/formative2/resized/image-1.jpg";
      imgurlarray[1] = "https://storage.googleapis.com/formative2/resized/image-2.jpg";
      imgurlarray[2] = "https://storage.googleapis.com/formative2/resized/image-3.jpg";
      imgurlarray[3] = "https://storage.googleapis.com/formative2/resized/image-4.jpg";
      imgurlarray[4] = "https://storage.googleapis.com/formative2/resized/image-5.jpg";
      imgurlarray[5] = "https://storage.googleapis.com/formative2/resized/image-6.jpg";
      imgurlarray[6] = "https://storage.googleapis.com/formative2/resized/image-7.jpg";
      imgurlarray[7] = "https://storage.googleapis.com/formative2/resized/image-8.jpg";
      imgurlarray[8] = "https://storage.googleapis.com/formative2/resized/image-9.jpg";
      imgurlarray[9] = "https://storage.googleapis.com/formative2/resized/image-10.jpg";
      imgurlarray[10] = "https://storage.googleapis.com/formative2/resized/image-11.jpg";
      imgurlarray[11] = "https://storage.googleapis.com/formative2/resized/image-12.jpg";
      imgurlarray[12] = "https://storage.googleapis.com/formative2/resized/image-13.jpg";
      imgurlarray[13] = "https://storage.googleapis.com/formative2/resized/image-14.jpg";

      let Img = imgurlarray[Math.floor(Math.random() * imgurlarray.length)];

      return Img;
   }

   useEffect(() => {
      setNewPostData((values) => ({ ...values, img_url: randomImg() }));
   }, []);

   useEffect(() => {
      setPostImage(newPostData.img_url);
   }, [newPostData]);

   function handleTitleChange(e) {
      const title = e.target.name;
      const value = e.target.value;
      setNewPostData((values) => ({ ...values, [title]: value }));
   }
   function handleCaptionChange(e) {
      const caption = e.target.name;
      const value = e.target.value;
      setNewPostData((values) => ({ ...values, [caption]: value }));
   }
   function handleUsernameChange(e) {
      const username = e.target.name;
      const value = e.target.value;
      setNewPostData((values) => ({ ...values, [username]: value }));
   }
   function handleUserChange(e) {
      const user = e.target.name;
      const value = e.target.value;
      setNewPostData((values) => ({ ...values, [user]: value }));
   }
   function handleSubmit(e) {
      e.preventDefault();
   }

   function sendForm() {
      console.log("SENDING FORM");

      axios
         .post("http://localhost:5000/posts/newpost", newPostData)
         .then((response) => {
            console.log(response);
            navigate("/home");
            fetchAllPosts();
         })
         .catch((error) => {
            console.log(error);
         });

      console.log(newPostData);
   }

   return (
      <div className="create-post page">
         <form onSubmit={handleSubmit}>
            {/* <div
               className="image-upload"
               onClick={(e) => {
                  handleimageSelect(e);
               }}>
               <img src={UploadIcon} alt="" />
               <p>Upload image</p>
            </div> */}
            <img className="image-upload" src={postImage || placeholderImg} alt="" />
            <input type="text" name="title" placeholder="Post title" onChange={handleTitleChange} />
            <textarea rows="10" type="text" name="caption" placeholder="Post caption" onChange={handleCaptionChange} />
            <input type="text" name="username" placeholder="Author" onChange={handleUsernameChange} />
            <input type="text" name="users" placeholder="User ID (No spaces and special characters)" onChange={handleUserChange} />

            <button className="primary" type="submit" onClick={sendForm}>
               Create post
            </button>
         </form>
      </div>
   );
}
