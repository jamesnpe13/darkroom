import { useEffect, useState } from "react";
import PostFeed from "../components/Post/PostFeed";
import "./Home.scss";

export default function Home({ postsData }) {

   return (
      <div className="home page">
         {postsData.map((item) => {
            return <PostFeed key={item._id} postData={item} />;
         })}
      </div>
   );
}

// export default function Home({ postsData }) {
//    const [usersData, setUserData] = useState([]);

//    useEffect(() => {
//       setUserData(data);
//    }, []);

//    return (
//       <div className="home page">
//          {usersData.map((item) => {
//             return <PostFeed key={item.id} postData={item} />;
//          })}
//       </div>
//    );
// }
