import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Contexts/TodoContext'
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos( p => [...p, {id: Date.now(), ...todo}])
  }

  const updateTodo = (id, todo) => {
    setTodos( p => p.map( pTodo => pTodo.id === id ? todo : pTodo))
  }

  const deleteTodo = (id) => {
    setTodos( p => p.filter( pTodo => pTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos( p => p.map( pTodo => pTodo.id === id ? ({...pTodo, completed: !pTodo.completed}) : pTodo))
  }

  // getting todos from local storage
  useEffect(() => {
    const todosList = localStorage.getItem("todos") // get todos in string formatt
    if(todosList && todosList.length > 0){
      setTodos(JSON.parse(todosList)) // convert string data in JSON
    }
  }, [])
  // storing todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) // store in the form of string
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className=' bg[#172842] min-h-screen py-8'>
      <div className=' w-full max-w-2xl mx-auto shadow-md founded-lg px-4 py-3 text-white'>
        <h1 className='  text-2xl font-bold text-center mb-8 mt-2'>
          Manage your todos
        </h1>
        <div className=' mb-4'>
          <TodoForm />
        </div>
        <div className=' flex flex-wrap gap-y-3'>
          {
            todos.map( todo => (
              <div key={todo.id} className=' w-full'>
                <TodoItem todo={todo} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
