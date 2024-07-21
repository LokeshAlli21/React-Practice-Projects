import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, updateTodo, setCompleted } from './features/todo/todoSlice'

function App() {

  const todos = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }
  const handleUpdate = (id, msg) => {
    dispatch(updateTodo({id: id, msg: msg}))
  }
  const handleCompleted = ({id, value}) => {
    dispatch(setCompleted({id, value}))
  }
  return (
    <div className='top-0 w-full min-h-screen p-0 py-4 m-0 bg-slate-600'>
      <div className='flex flex-col items-center justify-center p-4 mx-auto my-4 border border-white shadow shadow-xl flex-nowrap rounded-2xl w-96 shadow-gray-500'>
        <TodoForm />
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo}
          deleteTodo={handleDelete} 
          updateTodo={handleUpdate} 
          setCompleted={handleCompleted} />
        ))}
      </div>
    </div>
  )
}

export default App
