import { useFetch, useCounter } from "../hooks"
import { LoadingQuote, Quote } from "../03-examples/Components";


export const Layout = () => {

  const { counter, decrement, increment, reset, random } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);
  // !!data Verifica si la variable "data" tiene un valor asignado (si no es nulo o indefinido)
  const { image, name } = !!data && data;
  
  return (
    <>
      
      <h1>Rick and Morty Info</h1>
      <hr />

      {
        isLoading 
          ? <LoadingQuote /> 
          : <Quote image={ image } name={ name } />  
      }

      <button onClick={ () => increment(1) } disabled={ isLoading } className="btn btn-secondary">
        Next Character
      </button>
      <button onClick={ () => decrement(1) } disabled={ isLoading } className="btn btn-secondary">
        Previous Character
      </button>
      <button onClick={ () => reset() } disabled={ isLoading } className="btn btn-secondary">
        Reset
      </button>
      <button onClick={ () => random(1,800) } disabled={ isLoading } className="btn btn-secondary">
        Random
      </button>

      

    </>
  )
}
