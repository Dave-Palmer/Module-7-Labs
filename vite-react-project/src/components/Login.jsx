
import { useFormInput } from '../hooks/useFormInput';
import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext, themes } from '../context/ThemeContext'
import { UsernameContext } from '../context/UserContext';

function LoginComponent() {

    const usernameProps = useFormInput('')
    const passwordProps = useFormInput('')
    const themeContext = useContext(ThemeContext)
    const usernameContext = useContext(UsernameContext)

    const [loggedIn, setLoggedIn] = React.useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        let username = usernameProps.value
        //login successful/true if both values exist and match
        let isLoggedIn = (usernameProps.value && passwordProps.value && usernameProps.value === passwordProps.value)
        setLoggedIn(isLoggedIn)
        isLoggedIn ? usernameContext.setUserName(username) : usernameContext.setUserName('')
    }


    return (
        <div className="Login component-box " style={{ backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground }}>

            {/* if we're logged in, use the Hello component to say hello */}
            <div>{loggedIn ? 'Hello' + usernameProps.value : 'Please log in'}</div>

            {!loggedIn &&

                <form onSubmit={handleLogin}>
                    <div className="formRow">
                        <label htmlFor="username">Username: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input id="username" {...usernameProps} />
                    </div>
                    <div className="formRow">
                        <label htmlFor="password">Password: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input type="password" {...passwordProps} />
                    </div>
                    <button>Login</button>
                </form>
            }
        </div>
    );

}

export default LoginComponent;
