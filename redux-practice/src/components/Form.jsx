import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/store'

function Form() {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form action="" className='flex flex-row space-x-4 '>
      <input type="text" placeholder='Enter a Todo...' className='p-2 text-white rounded-md outline-none bg-slate-800 ' value={input} onChange={handleChange} />
      <button className='px-4 py-2 text-white bg-indigo-600 rounded-md ' onClick={handleClick}>Add Todo</button>
    </form>
  )
}

export default Form
