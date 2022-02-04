import * as React from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { contactContext } from '../../Context/ContactContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


export default function ContactCard({item}) {
    const { deleteContact } = React.useContext(contactContext)
    let icons = (
        <CardActions disableSpacing>
            <Link to={`edit/${item.id}`}>
                <IconButton>
                    <EditIcon/>
                </IconButton>
                </Link>

            <IconButton onClick={() => deleteContact(item.id)}>
                <DeleteIcon />
            </IconButton>
        </CardActions>
    )

    return (
        <Card sx={{ maxWidth: 450 }}>
            <CardMedia 
        component="img"
        height="200"
        image={item.image}
        alt={item.fullName}
       />

        <CardContent>
            <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
                {item.fullName}
            </Typography>
            <Typography variant="body1" color="GrayText.secondary">
            📱: {item.phoneNumber}
        </Typography>
        <Typography variant="body1" color="GrayText.secondary">
            📨: {item.mail}
        </Typography>
        <Typography variant="body1" color="GrayText.secondary">
            📍: {item.address}
        </Typography>
        </CardContent>
        {icons}
        </Card>
    );
}