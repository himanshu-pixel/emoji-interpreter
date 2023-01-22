import React, { useState } from "react";
import "./index.css";
// import React from "react";
const emojiDictionary = {
  "😂": "laughing",
  "😥": "crying",
  "🥳": "party!!",
  "😮": "surprise",
  "😉": "wink",
};
var emojis = Object.keys(emojiDictionary);

function App() {
  var [userInput, setUserInput] = useState("");
  function inputChangeHandler(event) {
    // console.log(event.target.value);
    var userEmo = event.target.value;
    if (userEmo in emojiDictionary) {
      setUserInput(emojiDictionary[userEmo]);
    } else setUserInput("Can't search");
  }
  function clickEmojiHandler(item) {
    setUserInput(emojiDictionary[item]);
  }
  return (
    <div className="App">
      <h1>Inside outt</h1>
      <input className="input-box" onChange={inputChangeHandler} />
      <span className="welcome"> {userInput}</span>
      <h2>Emojis we know..</h2>
      <span>
        {emojis.map((item) => {
          return (
            <span className="span-it" onClick={() => clickEmojiHandler(item)}>
              {item}
            </span>
          );
        })}
      </span>
    </div>
  );
}

export default App;
