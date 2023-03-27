import React from "react";


//named export for this context (to be used via useContext elsewhere)
export const EmojiContext = React.createContext();

//the provider wrapper for this context. uses its own state to keep track of which theme is in use
export const EmojiProvider = ({ children }) => {

    const [mood, setMood] = React.useState('Happy');
    const moodDiv = <div>{mood === 'Sad' ? 'Sad as 😢' : 'Happy as 😃'}</div>
    return (
        <EmojiContext.Provider value={{ mood, setMood, moodDiv }}>
            {children}
        </EmojiContext.Provider>
    );
}