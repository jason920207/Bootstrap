/**
 * @Author: xiaojiezhang
 * @Date:   2018-08-21T08:33:18-04:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2018-08-21T12:52:45-04:00
 */
 import React from "react";
 import "./ImageLinkForm.css"

 const ImageLinkForm = ({onInputChange,onButtonSubmit}) =>{
   return (
     <div>
      <p className="f3">
        {"this magic brain will detect faces from your pictures"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center"type="tex" onChange={onInputChange}/>
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}>Detect</button>
        </div>
    </div>
     </div>
   );
 }

 export default ImageLinkForm;
