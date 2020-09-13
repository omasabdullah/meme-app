import React, { useEffect, useState } from "react";

const MemeGenerator = (props) => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.imgflip.com/30b1gx.jpg");
  const [imageUrlSet, setImageUrlSet] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => setImageUrlSet(response.data.memes));
  }, []);

  const handleGenerateMeme = (event) => {
    const entry = Math.floor(Math.random() * imageUrlSet.length);
    setImageUrl(imageUrlSet[entry].url);
  }

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Top Text'
          onChange={(event) => setTopText(event.target.value)}
          value={topText} />
        <input
          type='text'
          placeholder='Bottom Text'
          onChange={(event) => setBottomText(event.target.value)}
          value={bottomText} />
        <button type='button' onClick={handleGenerateMeme}>Generate Meme</button>
      </form>
      <h2> {topText} </h2>
      <h2> {bottomText} </h2>
      <img src={imageUrl} alt=''/>
    </div>
  );
};

export default MemeGenerator;
