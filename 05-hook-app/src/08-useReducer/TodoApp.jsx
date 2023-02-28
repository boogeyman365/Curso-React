import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

export const TodoApp = () => {

  const initialState = [
    {
      id: new Date().getTime(),
      description: 'Recolectar la piedra del alma',
      done: 'false',
    },
    {
      id: new Date().getTime() * 3,
      description: 'Recolectar la piedra del poder',
      done: 'false',
    }
  ]

  const [todos, dispatch] = useReducer( todoReducer, initialState )


  return (
    <>
      <h1>Todo App (10) <small>,pendientes: 2</small> </h1>
      <hr />

      <div className="row">

        <div className="col-7">
          <TodoList todos={ todos } />
        </div>

        <div className="col-5">
          <h4> Agregar TODO</h4>
          <hr />
          <TodoAdd />
        </div>

      </div>

      

      
    </>
  )
}
