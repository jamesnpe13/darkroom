import "./PostImg.scss"
import {useLocation} from "react-router-dom"

export default function PostImg({ postData }) {
    const location = useLocation();
    const { id } = location.state;
    console.log(id)
    return (
      <img src={id}></img>
    // <p>{id}</p>
    );
 }