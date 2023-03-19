import "./SplashAnimation.scss";
import Logo from "../images/logo-nav.png";
import { useState } from "react";

export default function SplashAnimation() {
   const [logoIsVisible, setLogoIsVisible] = useState(true);
   const [logoIsSmall, setLogoIsSmall] = useState(false);

   function removeLogo() {
      //
   }

   return (
      <div className="splash-animation">
         <img
            src={Logo}
            onClick={() => {
               setLogoIsSmall(true);
            }}
            style={{ display: `${logoIsVisible ? "block" : "none"}` }}
            onAnimationEnd={removeLogo}
         />
      </div>
   );
}
