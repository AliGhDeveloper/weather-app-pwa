import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="navbar p-0 navbar-light bg-light d-flex justify-content-between">
            <img src="images/cloudy-day-1.svg" className="nav-brand mx-3" />
            <div className="mx-3 " id="navbarNav">
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item active mx-3">
                        <Link to="/" className="nav-link" >خانه</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" href="#">درباره ما</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}