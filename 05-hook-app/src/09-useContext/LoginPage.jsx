import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { setUser, user } = useContext( UserContext );
  console.log(user);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 2) }
      </pre>

      <button onClick={() => setUser({
        id: 123,
        name: 'Oscar Establie',
        email: 'asdsad@asd.com',
        })} className="btn btn-primary">
        Set User
      </button>
    </>
  )
}
