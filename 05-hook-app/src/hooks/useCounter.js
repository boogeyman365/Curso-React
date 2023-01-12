import { useState } from "react"

export const useCounter = ( initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = (value) => {
    return setCounter( counter + value);
  }
  const decrement = (value) => {
    
    if (counter <= 0) return setCounter(0);
    return setCounter( counter - value);
  }
  const reset = () => {
    setCounter( initialValue);
  }


  return {
    counter,
    increment,
    reset,
    decrement,
  }
}
