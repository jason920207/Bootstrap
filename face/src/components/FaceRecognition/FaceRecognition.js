/**
 * @Author: xiaojiezhang
 * @Date:   2018-08-21T11:03:51-04:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2018-08-21T13:31:49-04:00
 */
 import React from "react";
import './FaceRecognition.css';

 const FaceRecognition = ({imageUrl,box}) =>{
   return (
     <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto"/>
        <div className="bounding-box" style={{top:box.topRow,right:box.rightcol,bottom:box.bottomRow,left:box.leftcol}}></div>
      </div>
     </div>
   );
 }

 export default FaceRecognition;
