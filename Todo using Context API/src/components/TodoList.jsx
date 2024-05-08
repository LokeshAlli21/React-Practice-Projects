import React from 'react'
import TodoItem from './TodoItem'
import { useTodo } from '../contexts/TodoContext'

function TodoList() {

    const {todos, addTodo, updateTodo, deleteTodo, toggleDone} = useTodo()

  return (
    <div className='flex flex-col items-center w-full my-4 overflow-hidden border border-gray-200 divide-y divide-gray-200 rounded-lg'>
      {
        todos.map((todo,index) => {
            return (<TodoItem 
                key={index} 
                onDelete={deleteTodo} 
                todo={todo}
                onUpdate={updateTodo}
                onDone={toggleDone} />)
        })
      } 
    </div>
  )
}

export default TodoList
