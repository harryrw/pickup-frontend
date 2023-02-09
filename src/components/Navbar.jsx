import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-5" style={{ fontSize:"2rem"}}>
      <div className="container-fluid">
        <Link className="navbar-brand navbar-dark text-warning" to="/" style={{ fontSize:"2rem", float: "left" }}>
          PickUp
        </Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/games" style={{backgroundColor: "#333333", padding: "10px 20px", border: "2px solid #ffc107", borderRadius: "20px", boxShadow: "2px 2px 10px #333"}} >
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/courts" style={{backgroundColor: "#333333", padding: "10px 20px", border: "2px solid #ffc107", borderRadius: "20px", boxShadow: "2px 2px 10px #333"}}>
                Courts
              </Link>
            </li>
            {/* <li style={{ float: "right" }}>
              <img src="src/assets/basketball-orange.svg" alt="PickUp logo" style={{ width: "50px", height: "50px" }} />
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
