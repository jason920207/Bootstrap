/**
 * @Author: xiaojiezhang
 * @Date:   2018-08-21T08:06:19-04:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2018-08-21T08:29:21-04:00
 */
 import React from "react";
 import Tilt from 'react-tilt'
 import "./Logo.css";
 import brain from "./brain.png"

 const Logo = () =>{
   return (
     <div className="ma4 mt0">
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
          <div className="Tilt-inner pa3"> <img style={{paddingTop:"5px"}} alt="logo" src={brain}/> </div>
        </Tilt>
     </div>
   );
 }

 export default Logo;
