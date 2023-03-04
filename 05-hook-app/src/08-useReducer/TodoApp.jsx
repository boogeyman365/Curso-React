import { useTodo } from "../hooks/useTodo"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleRemoveTodo, handleToggleTodo, handleNewTodo  } = useTodo();

  return (
    <>
      <h1>Todo App ({ todosCount }) <small>,pendientes: {pendingTodosCount}</small> </h1>
      <hr />

      <div className="row">

        <div className="col-7">
          <TodoList 
            todos={ todos } 
            onDeleteTodo={ id => handleRemoveTodo(id) } 
            onToggleTodo={ id => handleToggleTodo(id) }
          />
        </div>

        <div className="col-5">
          <h4> Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={ todo => handleNewTodo(todo) } />
        </div>

      </div>

      

      
    </>
  )
}
