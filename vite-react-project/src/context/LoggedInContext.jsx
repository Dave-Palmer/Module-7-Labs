// import React from "react";


// //named export for this context (to be used via useContext elsewhere)
// export const LoggedInContext = React.createContext(false);

// //the provider wrapper for this context. uses its own state to keep track of which theme is in use
// export const LoggedInProvider = ({ children }) => {
//     const [loggedIn, setLoggedIn] = React.useState(false);

//     return (
//         <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
//             {children}
//         </LoggedInContext.Provider>
//     );
// }