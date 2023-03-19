import "./SplashAnimation.scss";
import Logo from "../images/logo-nav.png";
import { useState } from "react";

export default function SplashAnimation() {
   const [logoIsVisible, setLogoIsVisible] = useState(true);
   const [formIsVisible, setFormIsVisible] = useState(false);

   function handleLoogoAnimEnd() {
      setLogoIsVisible(false);
      setFormIsVisible(true);
   }

   return (
      <div className="splash-animation">
         <img src={Logo} style={{ display: `${logoIsVisible ? "block" : "none"}` }} onAnimationEnd={handleLoogoAnimEnd} />

         <form style={{ display: `${formIsVisible ? "flex" : "none"}` }}>
            <h2>Log in to your account</h2>
            <input type="text" className="username" placeholder="Username" />
            <input type="password" className="password" placeholder="Password" />
            <button type="submit" className="submit primary">
               Sign in
            </button>
         </form>
      </div>
   );
}
