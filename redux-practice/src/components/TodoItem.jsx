import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../store/store';

function TodoItem(props) {

    const [editable, setEditable] = useState(false)
    const [input, setInput] = useState(props.text)

    const dispatch = useDispatch()

    const handleUpdate = () => {
        setEditable(false)
        dispatch(updateTodo({
            id: props.id,
            input: input,
        }))
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleRemove =() => {
        dispatch(removeTodo(props.id))
    }

  return (
    <div key={props.id}  className='flex flex-row items-center justify-between w-full p-2 text-white rounded-md bg-zinc-600 '>
        <input 
        type="text"
        value={input}
        onChange={handleChange}
        disabled={!editable}
         className=' bg-transparent text-white outline-none' />
        { editable ?
        <button onClick={handleUpdate}>✔️</button>
        : 
        <div className=' flex flex-nowrap items-center justify-center space-x-3'>
            <button onClick={() => {setEditable( p => !p)}}>✏️</button>
            <button className='px-2 py-1 -my-1 bg-red-600 rounded-sm min-w-10' onClick={handleRemove}>Delete</button>
        </div> 
        }
    </div>
  )
}

export default TodoItem
