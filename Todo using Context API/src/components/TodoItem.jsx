import React, { useEffect, useState } from 'react'

function TodoItem(props) {

    const [editable, setEditable] = useState(false)
    const [text, setText] = useState('')
    const [done, setDone] = useState(false)

    const handleDelete = () => {
        props.onDelete(props.todo.id)
    }

    const handleChange = (e) => { 
        setText(e.target.value)   
    }

    const handleUpdate = () => {
        props.onUpdate({...props.todo, todo: text}, props.todo.id)
        setEditable( p => !p)
    }

    const handleEdit = () => {
      setEditable(p => !p)
    }

    const handleChecked = () => {
      props.onDone(props.todo.id)
      // console.log(props.id,done);
    }

    useEffect(() => {
        setText(props.todo.todo)
        setDone(props.todo.done)
        // console.log(done);
    },[props.todo])

  return (
    <div className='flex flex-row items-center justify-center w-full p-2 space-x-2 hover:bg-gray-300 bg-slate-100'>
      <input  
      type="checkbox" 
      onChange={handleChecked}
      name="" 
      id=""  />
      <input className={`w-full p-1 bg-transparent outline-none duration-200 ${editable && ' border-b-2 border-slate-400'} ${done && 'line-through'}`} type="text"
      disabled={!editable}
      onChange={handleChange}
      value={text}
       />
        <button className={`${editable ? 'block' : 'hidden'}`}
        onClick={handleUpdate} >✔</button>
        <button className={`${!editable ? 'block' : 'hidden'}`} onClick={handleEdit}>✏️</button>
        <button className={`${!editable ? 'block' : 'hidden'}`} onClick={handleDelete}>❌</button>
    </div>
  )
}

export default TodoItem
