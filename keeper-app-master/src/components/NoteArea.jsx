import React, {useState} from 'react';
import Note from './Note';
import Input from './Input';

export default function NoteArea(){

    const [notes, setNotes] = useState([]);

    function addNote(inputText){
        setNotes( p => {
            return ([...p, inputText]);
        });
        // console.log(inputText);
        // console.log(notes);
    }

    function deleteNote(id){
        // console.log(id);
        setNotes( p => {
            return (p.filter( (item, index) => {
                return index !== id;
            } ));
        });
    }

    return (
        <div>
            <Input onAdd={addNote} />
            {notes.map( (note, index) => {
                return <Note id={index} onDelete={deleteNote} key={index} title={note.title} content={note.content} />;
            })}
        </div>
    );
};