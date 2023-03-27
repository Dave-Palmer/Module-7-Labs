import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext, themes } from '../context/ThemeContext'
import { UsernameContext } from '../context/UserContext';

function Counter() {

    const [count, setCount] = useState(0)
    const themeContext = useContext(ThemeContext)
    const usernameContext = useContext(UsernameContext)

    useEffect(() => {
        document.title = `${usernameContext.username === "" ? 'You' : usernameContext.username} clicked ${count} times`
    }, [count])

    return (
        <div className="Counter componentBox" style={{ backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground }}>
            <p>{usernameContext.username === "" ? 'You' : usernameContext.username} clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>

            <button onClick={() => themeContext.theme === themes.light ? themeContext.setTheme(themes.dark) : themeContext.setTheme(themes.light)}>press to change theme</button>



            {/* how could we make a reset button to reset the count back to zero? */}
        </div>
    )
}

export default Counter