import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  return (
    <>
      <h1>Formulario Con Custom Hook</h1>
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
      
      <input
        type="password"
        className="form-control mt-3"
        placeholder="contraseña"
        name="password"
        value={ password }
        onChange= { onInputChange }
        ></input>

        <hr />

        <button onClick={ onResetForm } className="btn btn-primary">Borrar</button>
        
    </>
  )
}
