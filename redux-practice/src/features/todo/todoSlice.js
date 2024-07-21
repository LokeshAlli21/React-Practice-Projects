import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {
                id: 1,
                text: 'intial text',
                completed: false
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter( todo => action.payload !== todo.id)
        }
        ,
        updateTodo: (state, action) => {
            // console.log('id : ', action.payload.id, '\n', 'msg : ', action.payload.msg)
            state.todos.map( todo => action.payload.id === todo.id ? ({...todo, text: action.payload.msg}) : todo)
        },
        setCompleted: (state, action) => {
            // console.log('id : ', action.payload.id, '\n', 'value : ', action.payload.value)
            state.todos.map( todo => action.payload.id === todo.id ? ({...todo, completed: action.payload.value}): todo)
        }
    }
})

export const {addTodo, deleteTodo, updateTodo, setCompleted} = todoSlice.actions
export default todoSlice.reducer