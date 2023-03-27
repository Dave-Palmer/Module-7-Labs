
import { Link } from "react-router-dom"

function Post({ id, name, description }) {
    return (
        <li className="postCard">
            <h3><Link to={"/posts/" + id}> {name} </Link></h3>
            {/* <p>{description}</p> */}
        </li>
    )
}

export default Post