import React, { useEffect, useState } from "react";
import Meme from './Meme'

const MemeGenerator = (props) => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [activeMemes, setActiveMemes] = useState([]);
  const [memeDataSet, setMemeDataSet] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => setMemeDataSet(response.data.memes));
  }, []);

  const handleGenerateMeme = (event) => {
    const entries = [1, 2, 3].map(x => Math.floor(Math.random()*memeDataSet.length));
    setActiveMemes(entries);
  }

  const MemeList = () => {
    return (
      <div>
        {activeMemes.map(entry => {
          console.log(memeDataSet[entry]);
          return (
            <Meme key={entry} meme={memeDataSet[entry]} />
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
