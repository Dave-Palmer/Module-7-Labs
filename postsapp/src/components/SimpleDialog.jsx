import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { WidthFull } from '@mui/icons-material';

export function SimpleDialog(props) {
    const { onClose, open } = props;

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ width: '600px' }} id="alert-dialog-description">
                    {props.body}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} autoFocus>Close</Button>
            </DialogActions>
        </Dialog>
    );
}
//try to use this kind of dialog for the buttons on the StudentCard component to pop up a dialog with each student details when clicked

export default function SimpleDialogDemo(props) {

    const [open, setOpen] = React.useState(false);

    return (
        <div>

            <Button onClick={() => setOpen(true)}>
                Open Post
            </Button>

            <SimpleDialog
                open={open}
                onClose={() => setOpen(false)}
                title={props.title}
                body={props.body}
            />
        </div>
    );
}