
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <menu className="nav-logo"> Welcome </menu>
        <ul className="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li className="nav-contact"><a href="#">Contact</a></li>
        </ul>
      </div>

    </div>
  )
}


export default Navbar
