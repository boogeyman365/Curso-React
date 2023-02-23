import { useRef } from "react";

export const FocusScreen = () => {

  const inputRef = useRef();
  const inputRef2 = useRef();

  const onClick = (ref) => {
    ref.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input 
        ref={ inputRef }
        type="text"
        placeholder="Ingrese su nombre" 
        className="form-control"
      />

      <button
        className="btn btn-primary mt-3"
        onClick={ () => onClick(inputRef) }
      >
        Set Focus
      </button>

      <input 
        ref={ inputRef2 }
        type="text"
        placeholder="Ingrese su nombre" 
        className="form-control"
      />

      <button
        className="btn btn-primary mt-3"
        onClick={ () => onClick(inputRef2) }
      >
        Set Focus
      </button>
    </>
  )
}
