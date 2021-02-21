import React, { useEffect, useState } from "react";
import Meme from "./Meme";

const MemeGenerator = () => {
  const [textFieldTop, setTextFieldTop] = useState("");
  const [textFieldBottom, setTextFieldBottom] = useState("");
  const [dataActiveMemes, setDataActiveMemes] = useState([]);
  const [dataMemes, setDataMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setDataMemes(response.data.memes));
  }, []);

  const handleGenerateMeme = useCallback(() => {
    const entries = [1, 2, 3].map(() =>
      Math.floor(Math.random() * dataMemes.length)
    );
    setDataActiveMemes(entries);
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Top Text"
          onChange={(event) => setTextFieldTop(event.target.value)}
          value={textFieldTop}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          onChange={(event) => setTextFieldBottom(event.target.value)}
          value={textFieldBottom}
        />
        <button type="button" onClick={handleGenerateMeme}>
          Generate Meme
        </button>
      </form>
      {dataActiveMemes.map((entry) => (
        <Meme
          key={entry}
          meme={dataMemes[entry]}
          topText={textFieldTop}
          bottomText={textFieldBottom}
        />
      ))}
    </div>
  );
};

export default MemeGenerator;
