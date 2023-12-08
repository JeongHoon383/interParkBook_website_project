import React from "react";
import Bookcheckbox from "./Bookcheckbox";
import BookStar from './BookStar'

export default function BookAvatar({ image }) {

  return (
    <div className="bookavatar">
      <Bookcheckbox/>

      <img className="bookavatar_image"
        src={image} alt="" />

      <button type="button" className="bookavatar_button">베스트셀러</button>



    </div>


  )
}