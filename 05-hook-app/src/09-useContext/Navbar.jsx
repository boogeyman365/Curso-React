import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    // <>
    //   <Link to="/" className="link">Home</Link>
    //   <Link to="/login" className="link">Login</Link>
    //   <Link to="/about" className="link">About</Link>
    // </>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink to="/" className={ ({isActive}) => {
              // console.log(args);
              return `nav-link ${ isActive ? 'active': ''}`;
            }}>
              Home
            </NavLink>
            <NavLink to="/login" className={ ({isActive}) => {
              // console.log(args);
              return `nav-link ${ isActive ? 'active': ''}`;
            }}>
              Login
            </NavLink>
            <NavLink to="/about" className={ ({isActive}) => {
              // console.log(args);
              return `nav-link ${ isActive ? 'active': ''}`;  
            }}>
              About
            </NavLink>
            {/* <li className="nav-item">
              <Link className="nav-link active" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
