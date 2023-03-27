
import { Outlet } from 'react-router-dom'

function Posts() {
    return (
        <div className="latestPosts">
            <h2>Latest Posts
            </h2>
            <Outlet />
        </div>
    )
}

export default Posts