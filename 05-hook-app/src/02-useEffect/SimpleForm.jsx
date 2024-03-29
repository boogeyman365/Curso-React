import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Hola',
    email: 'hola@gmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [ name ]: value
    })
  }



  useEffect(() => {
    // console.log('useEffect called!!!!');
  }, []);

  useEffect(() => {
    // console.log('useEffect Change on FormState called!!!!');
  }, [ formState ]);

  useEffect(() => {
    // console.log('Email Change!!!!');
  }, [ email ]);
  


  return (
    <>
      <h1>Formulario Simple</h1>
      <hr></hr>

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange= { onInputChange }
        ></input>
      
      <input
        type="email"
        className="form-control mt-3"
        placeholder="oscar@gmail.com"
        name="email"
        value={ email }
        onChange= { onInputChange }
        ></input>

        <hr />
        {
          (username === 'boogey') && <Message></Message>
        }
        
    </>
  )
}
