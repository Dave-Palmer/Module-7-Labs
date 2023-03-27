import { NavLink, Link } from 'react-router-dom'
import Hello from './Hello'
import { UsernameContext } from "../context/UserContext"


function NavBar() {
    return (
        <div className="NavBar">

            <ul className="menu">

                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/clock">Clock</NavLink></li>
                <li><NavLink to="/Mood">Mood</NavLink></li>
                <li><NavLink to="/Posts">Posts</NavLink></li>
                <li><NavLink to="/Students">Students</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/login">Sign In</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar