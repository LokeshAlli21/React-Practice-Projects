import {configureStore, createSlice, nanoid} from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'

const initialState = {
    todos: [{
        id: 1,
        text: 'something'
    }]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( todo => todo.id !== action.payload)
        }
    }
})

export const store = configureStore({
    reducer: todoSlice.reducer
})

export const {addTodo, removeTodo} = todoSlice.actions

//export const useReduxStore = () => {
   // return (useSelector(state => state.todos))
//}
