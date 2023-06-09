import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import CustomizedDialogs from './CustomDialogBox';


export default function StudentCard({ id, name, location, set = 'set1', description }) {

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>

                <CardMedia
                    component="img"
                    height="140"
                    image={`https://robohash.org/${name}?size=200x200&set=${set}`}
                    alt={name}
                // onClick={() => alert('Hello')}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Based in {location}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                {/* <Button size="small" color="primary"> */}
                {/* <Link to={"/students/" + id}><strong>{name}</strong></Link> */}
                <CustomizedDialogs name={name} description={description} location={location} />
                {/* </Button> */}

            </CardActions>


        </Card>
    );
}