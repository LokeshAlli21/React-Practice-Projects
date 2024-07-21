import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function TodoForm() {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo('')
    }
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
  return (
    <form 
      onSubmit={handleSubmit}
      className='flex flex-row items-center justify-around w-full mb-5 flex-nowrap ' >
        <input type="text"
        onChange={handleChange}
        value={todo}
        className='w-full p-2 text-base duration-200 rounded rounded-r-none outline-none cursor-pointer bg-slate-400 focus:bg-gray-300' />
        <button type="submit"
        className='p-2 px-4 text-white duration-200 bg-blue-500 rounded rounded-l-none hover:bg-blue-600 ' >Add</button>
      </form>
  )
}

export default TodoForm
