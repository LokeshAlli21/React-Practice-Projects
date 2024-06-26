import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

function Note(props){
    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <IconButton onClick={ () => {
                props.onDelete(props.id);
            } }>
            <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default Note;