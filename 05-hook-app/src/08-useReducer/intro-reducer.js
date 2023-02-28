const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del alma',
  done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {

  if (action.type === '[TODO] add Todo') {
    return [...state, action.payload];
  }

  return state;
}

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false,
}

let todos = todoReducer();

const addTodoAction = {
  type: '[TODO] add Todo',
  payload: newTodo,
}


todos = todoReducer( todos, addTodoAction );

console.log({state: todos});