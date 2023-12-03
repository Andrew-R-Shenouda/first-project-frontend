import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <Link to="/crypto" className="nav-bar-option">
        Dashboard
      </Link>
      <Link to="/profile" className="nav-bar-option">
        Profile
      </Link>
    </div>
  );
}
export default Navbar;
