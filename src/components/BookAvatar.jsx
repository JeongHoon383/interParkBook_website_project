import React from "react";

export default function BookAvatar({ image }) {

  return (
    <div className="bookavatar">

      <img className="bookavatar_image"
        src={image} alt="" />

      <button type="button" className="bookavatar_button">베스트셀러</button>

    </div>


  )
}