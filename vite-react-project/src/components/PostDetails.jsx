import { useParams, Link } from 'react-router-dom'
import { PostsArray } from './PostsList'

export default function PostDetails() {
    console.log(PostsArray)
    const { postId } = useParams()
    console.log(postId)
    const post = PostsArray.find(post => parseInt(postId) === post.id)
    console.log(post)

    return (
        <div className='component-box'>
            <div>
                <h2>{post.name}</h2>
                <p>{post.description}</p>
            </div>
        </div>
    )
}