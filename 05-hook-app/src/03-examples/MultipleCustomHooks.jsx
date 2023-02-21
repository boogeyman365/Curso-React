import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter"


export const MultipleCustomHooks = () => {

  

  const { counter, decrement, increment, reset, random } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);
  // !!data Verifica si la variable "data" tiene un valor asignado (si no es nulo o indefinido)
  const { image, name } = !!data && data;


  console.log({data, isLoading, hasError});
  
  return (
    <>
      
      <h1>Rick and Morty Info</h1>
      <hr />

      {
        isLoading 
          ? (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          ) 
          : (
            <blockquote className="blockquote text-end" >
              <img className="rounded-circle" src={image} alt={ name } />
              <footer className="blockquote-footer">{ name }</footer>
            </blockquote>
          )
      }

      <button onClick={ () => increment(1) } className="btn btn-secondary">
        Next Character
      </button>
      <button onClick={ () => decrement(1) } className="btn btn-secondary">
        Previous Character
      </button>
      <button onClick={ () => reset() } className="btn btn-secondary">
        Reset
      </button>
      <button onClick={ () => random(1,800) } className="btn btn-secondary">
        Random
      </button>

      

    </>
  )
}
