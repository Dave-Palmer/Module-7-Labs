import React from 'react';
import Student from './Student';
import StudentCard from './StudentCard';
import Grid from '@mui/material/Grid'; // Grid version 1

//an array of objects (could come from an API or DB). to render each one in turn, we need to iterate over them,
//and apply the same transformation process to each one to turn the raw data into JSX.
//the Array.map function is OFTEN used in React for this, good idea to review it: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

export const students = [
    {
        id: 1,
        name: 'Adam Sagar',
        location: 'NZ',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, officiis, repellendus incidunt cum ipsam aliquid tempora veniam cupiditate exercitationem iusto ab mollitia ipsa rerum adipisci voluptatum eligendi error eius eos!'
    },
    {
        id: 2,
        name: 'Alannie Decena',
        location: 'NZ',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, officiis, repellendus incidunt cum ipsam aliquid tempora veniam cupiditate exercitationem iusto ab mollitia ipsa rerum adipisci voluptatum eligendi error eius eos!'

    },
    {
        id: 3,
        name: 'Amber Min Hsuan Hong',
        location: 'AU',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, officiis, repellendus incidunt cum ipsam aliquid tempora veniam cupiditate exercitationem iusto ab mollitia ipsa rerum adipisci voluptatum eligendi error eius eos!'

    },
    {
        id: 4,
        name: 'Christopher Marsh',
        location: 'AU',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, officiis, repellendus incidunt cum ipsam aliquid tempora veniam cupiditate exercitationem iusto ab mollitia ipsa rerum adipisci voluptatum eligendi error eius eos!'

    },
    {
        id: 5,
        name: 'David Palmer',
        location: 'NZ',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, officiis, repellendus incidunt cum ipsam aliquid tempora veniam cupiditate exercitationem iusto ab mollitia ipsa rerum adipisci voluptatum eligendi error eius eos!'

    },
    {
        id: 6,
        name: 'Jason Reid',
        location: 'AU',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, officiis, repellendus incidunt cum ipsam aliquid tempora veniam cupiditate exercitationem iusto ab mollitia ipsa rerum adipisci voluptatum eligendi error eius eos!'

    },
    {
        id: 7,
        name: 'Luke Barker',
        location: 'NZ',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, officiis, repellendus incidunt cum ipsam aliquid tempora veniam cupiditate exercitationem iusto ab mollitia ipsa rerum adipisci voluptatum eligendi error eius eos!'

    },
    {
        id: 8,
        name: 'Marco Wells',
        location: 'NZ',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, officiis, repellendus incidunt cum ipsam aliquid tempora veniam cupiditate exercitationem iusto ab mollitia ipsa rerum adipisci voluptatum eligendi error eius eos!'

    },
    {
        id: 9,
        name: 'Preshen Govender',
        location: 'NZ',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, officiis, repellendus incidunt cum ipsam aliquid tempora veniam cupiditate exercitationem iusto ab mollitia ipsa rerum adipisci voluptatum eligendi error eius eos!'

    }
]

function StudentList() {

    const [currentStudents, setCurrentStudents] = React.useState(students)

    //we can either create a variable storing all the list items and render it, OR we can move this students.map down into the return directly
    const studentList = currentStudents.map((student, index) => /* in a pinch you can use the array index as the key but it's not recommended */
        <Grid key={student.id} item xs={12} md={6} lg={4}>
            <StudentCard id={student.id} name={student.name} location={student.location} set="set2" description={student.description} />
        </Grid>
        //<Student key={student.id} student={student}/> //we could also pass the whole student object as a single prop and do props.student.name
        //<Student key={student.id} {...student}/> //or we can destructure the student object and unpack it into individual props like this
    )

    return (
        <div className="StudentList componentBox">
            <h2>IOD Software Engineering Students ({students.length} in cohort)</h2>
            <Grid container spacing={2}>
                {studentList}
            </Grid>
            {/* since reverse modifies the original array and we shouldn't mutate state directly, we clone it first */}
            <button onClick={() => setCurrentStudents([...currentStudents].reverse())}>Reverse Order</button>


        </div>
    );
}

export default StudentList;