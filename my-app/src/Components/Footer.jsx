import { NavLink } from "react-router-dom";
const Footer = () =>{
    return(
      <div>
        <div className="container border-top ">
  <footer className="py-3 ">
    <ul className="nav justify-content-center ">
      <li className="nav-item"><NavLink href="#" className="nav-link px-2 text-body-secondary">Home</NavLink></li>
      <li className="nav-item"><NavLink href="#" className="nav-link px-2 text-body-secondary">Features</NavLink></li>
      <li className="nav-item"><NavLink href="#" className="nav-link px-2 text-body-secondary">Pricing</NavLink></li>
      <li className="nav-item"><NavLink href="#" className="nav-link px-2 text-body-secondary">FAQs</NavLink></li>
      <li className="nav-item"><NavLink href="#" className="nav-link px-2 text-body-secondary">About</NavLink></li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
  </footer>
</div>
      </div>
    )
}
export default Footer;