import React from "react";
import styles from "./mystyle.module.css";

const Meme = ({ meme, topText, bottomText }) => {
  return (
    <div className={styles.container}>
      <img src={meme.url} alt="" height="240px" />
      <h2 className={styles.topText}> {topText} </h2>
      <h2 className={styles.bottomText}> {bottomText} </h2>
    </div>
  );
};

export default Meme;
