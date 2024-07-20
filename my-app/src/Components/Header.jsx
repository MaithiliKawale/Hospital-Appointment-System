import {NavLink} from 'react-router-dom'
import Login from '../Button/Login';
import Register from '../Button/Register';
const Header = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"> <h5>i-Hospital</h5></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/appointmentform">Book Appointments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/appointmentlist">List of Appointments</NavLink>
        </li>
      </ul>
    <Login/>
    <Register/>
    </div>
  </div>
</nav>
        </>
    )
};
export default Header;