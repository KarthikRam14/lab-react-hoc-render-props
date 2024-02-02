// import React, { useState } from 'react'

export default function LikePost(props) {

  // const [likePostCounter, setPostCounter] = useState(0);

  // const handlePostCount = ()=>{
  //   setPostCounter(likePostCounter+1);
  // }

  return (
    <div>
      <button onClick={props.handlePostCount}>Like Post {props.LikePostCounter}</button>
    </div>
  )
}

