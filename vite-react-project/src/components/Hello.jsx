import { useContext } from 'react'
import { UsernameContext } from "../context/UserContext"

export default function Hello() {

    const usernameContext = useContext(UsernameContext)

    return <div className="Hello componentBox">
        <h1>Hello {usernameContext.username ? usernameContext.username : 'World'} </h1>
    </div>
}
