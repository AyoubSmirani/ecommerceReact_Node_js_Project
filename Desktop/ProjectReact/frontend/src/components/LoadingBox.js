import React from 'react'

import {BiLoaderCircle } from "react-icons/bi";
function LoadingBox() {
  return (
    <div className="loading">
   <BiLoaderCircle fontSize={"100px"} style={{position:'relative',top:"350px",display:"flex",justifyContent:"center" }}>loading...</BiLoaderCircle>

    </div>
  )
}

export default LoadingBox