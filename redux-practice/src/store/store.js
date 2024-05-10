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
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map( pTodo => pTodo.id === action.payload.id ? {id: action.payload.id, text: action.payload.text} : pTodo)
        }
    }
})

export const store = configureStore({
    reducer: todoSlice.reducer
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export const useReduxStore = () => {
    return (useSelector(state => state.todos))
}
