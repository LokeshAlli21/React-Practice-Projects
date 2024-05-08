import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoProvider } from './contexts/TodoContext'

function App() {

  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    if (todo) {
      setTodos( p => {
        return ([...p, {todo:todo, id: Date.now(), done: false}])
      })
    }
  }
  const updateTodo = (todo, id) => {
    setTodos( p => {
      return (p.map( pTodo => (pTodo.id == id ? todo : pTodo )))
    })
  }
  const deleteTodo = (id) => {
    setTodos( p => {
      return (p.filter( todo => todo.id != id))
    })
  }
  const toggleDone = (id) => {
    
    setTodos( p => (p.map( pTodo => {
      // console.log(pTodo);    
       return (pTodo.id == id ? {...pTodo, done: !pTodo.done} : pTodo)
    })))
    // todos.map(e => {
    //   e.id == id && console.log(e.done)
    //   return true
    // });
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    if(data && data.length > 0){
      setTodos(data)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('data',JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleDone}}>
      <div className='flex flex-col items-center justify-center p-6 mx-auto my-4 border border-gray-300 rounded-lg shadow-xl bg-gray-100 max-w-fit min-w-[30vw]'>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App
