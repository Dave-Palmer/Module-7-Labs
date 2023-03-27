import { TextField, Button, Box } from "@mui/material"
import { students } from "./StudentList"


class Student {
    constructor(name, location, description, id) {
        this.name = name
        this.location = location
        this.description = description
        this.id = id
    }
}

function NewStudent() {

    const handleSubmit = (event) => {

        event.preventDefault();
        const [name, location, description] = new FormData(event.currentTarget);
        console.log(name)
        let student = new Student(name[1], location[1], description[1], 77)
        console.log(student)
        students.push(student)
        console.log(students)

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

export default NewStudent