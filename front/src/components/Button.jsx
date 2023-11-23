import React from "react";


export default function Button({ className, buttonName }) {
  return (
    <button type="button" className={className}>{buttonName}</button>
  )
}

//파라미터 바뀌는 내용만 외부에서 받을 때s