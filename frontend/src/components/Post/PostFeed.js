import "./PostFeed.scss";

export default function PostFeed({ postData }) {
   return (
      <div className="post-feed">
         <img src={postData.img_url} alt="" />

         <main>
            <h2>{postData.title}</h2>
            <h3>{postData.username}</h3>
            <p>{postData.caption}</p>
         </main>

         <footer>
            <span>{postData.date}</span>
            <span>{postData.likes}</span>
         </footer>
      </div>
   );
}
