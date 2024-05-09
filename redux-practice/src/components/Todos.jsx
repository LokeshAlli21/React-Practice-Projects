import React from 'react'
import { removeTodo, useReduxStore } from '../store/store'
import { useDispatch } from 'react-redux';

function Todos() {

    const data = useReduxStore()

    const dispatch = useDispatch()

    console.log(data);

  return (
    <div className='flex flex-col items-center justify-center w-full gap-3 my-3'>
        {data.map( todo => (
            <div key={todo.id}  className='flex flex-row items-center justify-between w-full p-2 text-white rounded-md bg-zinc-600 '>
                <p>{todo.text}</p>
                <button className='px-2 py-1 -my-1 bg-red-600 rounded-sm min-w-10' onClick={() => {
                    dispatch(removeTodo(todo.id))
                }}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Todos
