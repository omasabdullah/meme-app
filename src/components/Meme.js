import React from "react";
import styles from "./mystyle.module.css";

const Meme = (props) => {
  return (
    <div className={styles.container}>
      <img
        src={props.meme.url}
        alt=""
        height="240px"
      />
      <h2 className={styles.topText}> {props.topText} </h2>
      <h2 className={styles.bottomText}> {props.bottomText} </h2>
    </div>
  );
};

export default Meme;
