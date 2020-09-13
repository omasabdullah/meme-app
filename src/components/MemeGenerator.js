import React, { useEffect, useState } from "react";
import Meme from './Meme'

const MemeGenerator = (props) => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memes, setMemes] = useState([]);
  const [imageUrlSet, setImageUrlSet] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => setImageUrlSet(response.data.memes));
  }, []);

  const handleGenerateMeme = (event) => {
    const entries = [1, 2, 3].map(x => Math.floor(Math.random()*imageUrlSet.length));
    setMemes(entries);
  }

  const MemeList = () => {
    return (
      <div>
        {memes.map(entry => {
          console.log(imageUrlSet[entry]);
          return (
            <Meme key={entry} meme={imageUrlSet[entry]} />
          );
        })}
      </div>
    );
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
      {MemeList()}
    </div>
  );
};

export default MemeGenerator;
