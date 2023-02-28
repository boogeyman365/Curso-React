import { useRef } from "react"

export const TodoAdd = () => {

  const inputRef = useRef();

  const checkInputRef = () => {
    ref.current;
  }

  return (
    <>
      <form>
        <input
          ref={inputRef}
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
        />

        <button type="submit" className="btn btn-outline-primary mt-2" onClick={ () => checkInputRef() }>
          Agregar
        </button>
      </form>
    </>
  )
}
