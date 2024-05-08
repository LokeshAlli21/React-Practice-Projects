import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: 'Something',
        done: false,
    },],
    addTodo: (todo) => {},
    updateTodo: (toto, id) => {},
    deleteTodo: (id) => {},
    toggleDone: (id) => {},
})

export const TodoProvider = TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext)
}