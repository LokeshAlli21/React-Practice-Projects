import React, { useContext, useState } from 'react'
import { TodoContext } from '../Contexts/TodoContext'

function TodoForm() {
    const [todo, setTodo] = useState('')
    
    const {addTodo} = useContext(TodoContext)

    const add = (e) => {
        e.preventDefault()
        
        if(!todo) return

        addTodo({todo, completed: false}) // {todo: todo} same as {todo} coz key and value variable name is same
        setTodo('')
    }
  return (
    <form className='flex'
    onSubmit={(e) => {
        add(e)
    }}>
        <input type="text" placeholder='Write todo...'
        className=' w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-gray-600'
        value={todo}
        onChange={(e) => {
            setTodo(e.target.value)
        }}/>
        <button type='submit' 
        className=' rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>Add</button>
    </form>
  )
}

export default TodoForm
