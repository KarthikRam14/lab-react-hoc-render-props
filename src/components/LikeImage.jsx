// import React, { useState } from 'react'

export default function LikeImage(props) {

  // const [likeImageCounter, setLikeImageCounter] = useState(0);

  // const handleLikeImageCount = ()=>{
  //   setLikeImageCounter(likeImageCounter+1);
  // }

  return (
    <div>
      <button onClick={props.handleLikeImageCount}>Like Image {props.likeImageCounter}</button>
    </div>
  )
}
