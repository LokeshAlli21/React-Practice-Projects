import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {

    const [value, setValue] = useState('')

    const {addTodo} = useTodo()

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

  return (
    <form
    onSubmit={handleSubmit}
     className='flex flex-row items-center justify-center w-full gap-0 p-0 space-x-0 overflow-hidden border border-gray-200 rounded-md rounded-lg '>
        <input 
        type="text"
        placeholder='Add todos...'
        autoFocus={true}
        onChange={handleChange}
        value={value} 
        className='w-full p-2 duration-100 bg-transparent border-none outline-none focus:bg-gray-200 hover:bg-gray-200'/>
        <button className='px-4 py-2 font-bold text-gray-900 duration-200 bg-blue-400 outline-none hover:bg-blue-500'>Add</button>
    </form>
  )
}

export default TodoForm
