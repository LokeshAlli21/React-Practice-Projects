import React, { useState } from 'react'

function TodoItem({todo, deleteTodo, updateTodo, setCompleted}) {
  const [isEditable, setIsEditable] = useState(false)
  const [isCompleted, setIsCompleted] = useState(todo.completed)
  const [msg, setMSG] = useState(todo.text)
  const handleChange = (e) => {
    setMSG(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    isEditable && updateTodo(todo.id, msg)
    setIsEditable(p => !p)
  }
  const handleCompleted = () => {
    setIsCompleted(p => !p)
    setCompleted({id: todo.id, value: isCompleted})
  }
  return (
    <form className='flex flex-row items-center justify-around w-full p-1 mb-2 rounded flex-nowrap bg-slate-400' onSubmit={handleSubmit} >
      <input type="checkbox" checked={isCompleted} onChange={handleCompleted} />
        <input type="text" 
        className={`w-full p-1 bg-transparent outline-none ${isCompleted ? ' line-through' : ''}`}
        value={msg}
        onChange={handleChange}
        readOnly={!isEditable} />
        <button className='p-1 px-2 mr-1 text-white bg-blue-500 rounded ' type="submit" >{isEditable ? 'Save' : 'Edit'}</button>
        <button className='p-1 text-white bg-red-500 rounded 'onClick={() => {deleteTodo(todo.id)}} >Delete</button>
    </form>
  )
}

export default TodoItem
