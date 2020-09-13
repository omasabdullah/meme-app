import React from "react";

const Meme = (props) => {
  return (
    <div>
      <h2> {props.meme.topText} </h2>
      <h2> {props.meme.bottomText} </h2>
      <img src={props.meme.imageUrl} alt="" />
    </div>
  );
};

export default Meme;
