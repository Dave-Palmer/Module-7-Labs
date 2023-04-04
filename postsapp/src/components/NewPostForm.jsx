import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { SimpleDialog } from "./SimpleDialog"

function NewPostDialog(props) {
    const [open, setOpen] = useState(false)

    return (
        <Box className="NewPosttDialog" sx={{ m: 3 }} component="div">
            <Button size="large" onClick={() => setOpen(true)} >
                Add New Post
            </Button>

            <SimpleDialog
                open={open}
                onClose={() => setOpen(false)}
                title="Add New Post"
                body={<NewPostForm {...props} closeDialog={() => setOpen(false)} />}
            />
        </Box>
    )
}

function NewPostForm(props) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    //see https://react.dev/learn/updating-arrays-in-state#adding-to-an-array for tips on updating arrays in state
    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateHandler(title, body)
        if (props.closeDialog) props.closeDialog() // handles closing the dialog of the form if it exists
    }

    return (
        <div className="componentBox NewStudentForm">
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField name="title" margin="normal" label="title" value={title} onChange={(e) => setTitle(e.target.value)} sx={{ backgroundColor: 'white', width: '300px' }} /><br />
                <TextField name="body" margin="normal" label="body" value={body} onChange={(e) => setBody(e.target.value)} sx={{ backgroundColor: 'white', width: '500px', height: '300px' }} /><br />
                <Button type="submit" sx={{}}>Add Post</Button>
            </Box>
        </div>
    )
}

export { NewPostForm, NewPostDialog }