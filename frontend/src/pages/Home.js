import PostFeed from "../components/Post/PostFeed";

import "./Home.scss";

import data from "../database.json";
import { useEffect, useState } from "react";

export default function Home() {
   const [usersData, setUserData] = useState([]);

   useEffect(() => {
      setUserData(data);
   }, []);

   return (
      <div className="home page">
         {usersData.map((item) => {
            return <PostFeed key={item.id} postData={item} />;
         })}
      </div>
   );
}
