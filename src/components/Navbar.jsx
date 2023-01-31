import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-5">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-dark text-warning " to="/">
          PickUp
        </Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-warning" aria-current="page" to="/games">
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/courts">
                Courts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
