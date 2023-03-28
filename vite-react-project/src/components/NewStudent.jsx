import { TextField, Button, Box } from "@mui/material"
import { Navigate, redirect, useNavigate } from "react-router-dom"
import { students } from "./StudentList"
import Student from "./NewStudentClass"


function AddNewStudent() {
    const navigate = useNavigate()

    const handleSubmit = (event) => {


        event.preventDefault();
        const [name, location, description] = new FormData(event.currentTarget);
        console.log(name)
        let id = students.length + 1
        let student = new Student(name[1], location[1], description[1], id)
        console.log(student)
        students.push(student)
        console.log(id);
        alert(name[1] + ' ' + 'added to student list');
        navigate('/students')
        // return redirect('/students')

        // let username = data.get('username')
        // let password = data.get('password')
    };


    return (
        <div>

            <h1>Add New Student</h1>
            <div className="white-background student-form">
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        style={{ width: "50%", margin: "5px" }}
                        type="text"
                        label="Enter student full name"
                        id="name"
                        name="name"
                        variant="outlined" />
                    <TextField
                        style={{ width: "50%", margin: "5px" }}
                        type="text"
                        label="Enter student location"
                        id="location"
                        name="location"
                        variant="outlined" />
                    <TextField
                        style={{ width: "50%", margin: "5px" }}
                        type="text"
                        label="Enter student description"
                        id="description"
                        name="description"
                        variant="outlined" />
                    {/* <br /> */}
                    <Button
                        type="submit"
                        // fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, width: "50%" }}>Add Student</Button>
                </Box>
            </div>
        </div>
    )
}

export default AddNewStudent