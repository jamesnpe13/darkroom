import "./EditPost.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditPost({ postsData }) {
   const params = useParams().id;
   const [targetPost, setTargetPost] = useState(undefined);
   const [newPostData, setNewPostData] = useState([]);

   useEffect(() => {
      const thePost = postsData.find(({ _id }) => _id === params);

      // setNewPostData((values) => ({ ...values, id: params }));
      setTargetPost(thePost);
   }, []);

   useEffect(() => {
      setNewPostData(targetPost);
   }, [targetPost]);

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
      console.log(newPostData);

      axios
         .put("http://localhost:5000/posts/editpost", newPostData)
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         });

      console.log(newPostData);
   }

   function deletePost() {
      //
   }

   if (targetPost !== undefined) {
      return (
         <div className="edit-post page">
            <form onSubmit={handleSubmit}>
               <img className="post-image" src={targetPost.img_url} alt="" />
               <input type="text" name="title" defaultValue={targetPost.title} placeholder="Post title" onChange={handleTitleChange} />
               <textarea rows="10" type="text" defaultValue={targetPost.caption} name="caption" placeholder="Post caption" onChange={handleCaptionChange} />
               <input type="text" defaultValue={targetPost.username} name="username" placeholder="Author" onChange={handleUsernameChange} />
               <input type="text" defaultValue={targetPost.user} name="user" placeholder="User ID (No spaces and special characters)" onChange={handleUserChange} />

               <button className="primary" type="submit" onClick={sendForm}>
                  Save changes
               </button>
               <button className="destructive" type="button" onClick={deletePost}>
                  Delete
               </button>
            </form>
         </div>
      );
   }
}
