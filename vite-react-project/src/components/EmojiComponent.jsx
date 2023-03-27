import React, { useContext } from "react";
import { EmojiContext } from "../context/EmojiContext";
import { SimpleDialog } from "./SimpleDialogDemo";


function EmojisDisplay() {

    const { mood, setMood, moodDiv } = useContext(EmojiContext)


    return (
        <div className="componentBox">
            {/* <div>{mood}{mood === 'Happy' ? '😃' : '😢'}</div> */}
            {moodDiv}
            <button onClick={() => mood === 'Happy' ? setMood('Sad') : setMood('Happy')}>Change Mood</button>
            {/* {emojiContext.sad} */}
        </div>
    )
}

export default EmojisDisplay