import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


export default function Input(props){

    const [idExpanded, setExpanded] = useState(false);

    const [inputText, setInputText] = useState({
        title: '',
        content: '',
    });

    function handleChange(event){
        const {name, value} = event.target;
        setInputText( p => {
            return ({
                ...p,
                [name]: value,
            });
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        props.onAdd(inputText);
        setInputText({
            title: '',
            content: '',
        });
        // console.log(inputText);
    }

    function handleClick(){
        setExpanded(true);
    }

    return (
        <div onClick={handleClick}>
            <form className='create-note'>
                <input autoFocus={idExpanded ? true : false} type="text" value={inputText.title} onChange={handleChange} name="title" id="" placeholder={idExpanded ? 'Title' : 'Take a note...'}/>
                <textarea rows='3' style={{display: idExpanded ? 'block' : 'none'}} value={inputText.content} onChange={handleChange} name="content"  placeholder="content"/>
                <Zoom in={idExpanded ? true : false}>
                    <Fab aria-label="add" size="medium" onClick={handleSubmit}>
                        <AddIcon  aria-label="add" />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
};