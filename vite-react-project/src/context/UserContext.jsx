import React from "react";


//named export for this context (to be used via useContext elsewhere)
export const UsernameContext = React.createContext('');

//the provider wrapper for this context. uses its own state to keep track of which theme is in use
export const UsernameProvider = ({ children }) => {
    const [username, setUserName] = React.useState('');
    const [loggedIn, setLoggedIn] = React.useState('');

    return (
        <UsernameContext.Provider value={{ username, setUserName, loggedIn, setLoggedIn }}>
            {children}
        </UsernameContext.Provider>
    );
}