import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleDialogDemo from './SimpleDialog';


export default function PostCard({ title, body }) {
    return (
        <Card sx={{ minWidth: '50vw', maxWidth: '70vw', mb: '50px' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Post From:
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Post:
                </Typography>
                <Typography variant="body3">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <SimpleDialogDemo title={title} body={body} />
            </CardActions>
        </Card>
    );
}