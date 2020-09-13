import React from "react";

const Meme = (props) => {
  return (
    <div>
      <h2> {props.topText} </h2>
      <h2> {props.bottomText} </h2>
      <img src={props.meme.url} alt="" height="240px"/>
    </div>
  );
};

export default Meme;
