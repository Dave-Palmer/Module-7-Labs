import React from 'react';
import Post from './Post';


//an array of objects (could come from an API or DB). to render each one in turn, we need to iterate over them,
//and apply the same transformation process to each one to turn the raw data into JSX.
//the Array.map function is OFTEN used in React for this, good idea to review it: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

export const PostsArray = [
    {
        id: 1,
        name: 'Post1',
        image: '',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias doloribus saepe iusto magnam. Voluptatum incidunt esse neque quis deserunt similique officiis, aperiam quo iure facere doloremque corporis aut, pariatur dolorem!"
    },
    {
        id: 2,
        name: 'Post2',
        image: '',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias doloribus saepe iusto magnam. Voluptatum incidunt esse neque quis deserunt similique officiis, aperiam quo iure facere doloremque corporis aut, pariatur dolorem!"

    },
    {
        id: 3,
        name: 'Post3',
        image: '',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias doloribus saepe iusto magnam. Voluptatum incidunt esse neque quis deserunt similique officiis, aperiam quo iure facere doloremque corporis aut, pariatur dolorem!"

    },
    {
        id: 4,
        name: 'Post4',
        image: '',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias doloribus saepe iusto magnam. Voluptatum incidunt esse neque quis deserunt similique officiis, aperiam quo iure facere doloremque corporis aut, pariatur dolorem!"

    },
    {
        id: 5,
        name: 'Post5',
        image: '',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias doloribus saepe iusto magnam. Voluptatum incidunt esse neque quis deserunt similique officiis, aperiam quo iure facere doloremque corporis aut, pariatur dolorem!"

    },

]

function PostsList() {

    const posts = PostsArray.map((post, index) =>
        <Post id={post.id} key={post.id} name={post.name} description={post.description} />

    )

    // const postie = PostsArray.map((student, index) => /* in a pinch you can use the array index as the key but it's not recommended */
    //     <Post key={student.id} id={student.id} name={student.name} description={student.description} />
    //     //<Student key={student.id} student={student}/> //we could also pass the whole student object as a single prop and do props.student.name
    //     //<Student key={student.id} {...student}/> //or we can destructure the student object and unpack it into individual props like this
    // )

    return (
        <div className="StudentList componentBox">
            <h3>Click on post for more info</h3>
            <ul className="studentList">
                {posts}
            </ul>


        </div>
    );
}

export default PostsList;