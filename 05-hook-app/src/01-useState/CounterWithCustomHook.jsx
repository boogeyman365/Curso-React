import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const { counter, decrement, increment, reset } = useCounter(5);



  return (
    <>
      <h1>Counter with hook: { counter }</h1>

      <hr></hr>

      <button className="btn btn-success" onClick={ () => increment(2) }>+1</button>
      <button className="btn btn-success" onClick={ reset }>Reset</button>
      <button className="btn btn-success" onClick={ () => decrement(2) } >-1</button>


    </>
  )
}
