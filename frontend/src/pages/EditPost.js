import "./EditPost.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditPost({ postsData, fetchAllPosts }) {
   const params = useParams().id;
   const navigate = useNavigate();
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
            navigate("/home");
            fetchAllPosts();
         })
         .catch((error) => {
            console.log(error);
         });
      console.log(newPostData);
   }

   function deletePost() {
      axios
         .delete(`http://localhost:5000/posts/deletepost/${params}`)
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         });
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
               <button
                  className="destructive"
                  type="button"
                  onClick={() => {
                     deletePost();
                     navigate("/");
                     setTimeout(() => {
                        fetchAllPosts();
                     }, 1000);
                  }}>
                  Delete
               </button>
            </form>
         </div>
      );
   }
}
