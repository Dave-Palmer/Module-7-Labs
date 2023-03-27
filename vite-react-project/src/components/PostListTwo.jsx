import { useEffect, useState } from "react";

function PostList() {

    const [posts, setPosts] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(postData => {
                console.log(posts)
                setPosts(postData)
            },[])
        return (
            <h1>Hello</h1>
        )


    })
}