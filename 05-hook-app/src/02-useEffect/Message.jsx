import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {
    console.log('Message Mounted');
  
    // El return se ejecuta cuando el efecto se desactiva
    return () => {
      console.log('Message UnMounted');
    }
  }, [])
  

  return (
    <>
      <h3>Ususario ya existe!!</h3>
    </>
  )
}
