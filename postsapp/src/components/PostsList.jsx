import { useState, useEffect } from "react"

import PostCard from "./Post"
// import SimpleDialogDemo from "./SimpleDialog"
import { NewPostForm, NewPostDialog } from "./NewPostForm"

function PostList() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetch('posts.json')
            .then(response => response.json())
            .then(postData => {
                console.log(postData)
                setPosts(postData)
            })
    }, [])

    const handleAddPost = (title, body) => {
        const newPost = { id: posts.length + 1, title: title, body: body } //create a new object based on form values
        // students.unshift(newStudent); //add it to main students array
        setPosts([ //add it to current list in state
            newPost,
            ...posts //include all the previous array items
        ])
    }

    return (
        <>
            <NewPostDialog postsList={posts} updateHandler={handleAddPost} />
            <div className="PostList componentBox">
                {posts.map(post =>
                    <PostCard key={post.id} title={post.title} body={post.body} />
                )}

            </div>
        </>
    )
}

// (
//     <div className="post" key={post.id}><h3>Post #{post.id}: {post.title}</h3><p>{post.title}</p>
//     </div>
// )

export default PostList