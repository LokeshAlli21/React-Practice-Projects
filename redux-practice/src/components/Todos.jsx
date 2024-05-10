import React from 'react'
import { useReduxStore } from '../store/store'
import TodoItem from './TodoItem';

function Todos() {

    const data = useReduxStore()

    // console.log(data);

  return (
    <div className='flex flex-col items-center justify-center w-full gap-3 my-3'>
        {data.map( todo => (
            <TodoItem key={todo.id} id={todo.id} text={todo.text} onR />
        ))}
    </div>
  )
}

export default Todos
