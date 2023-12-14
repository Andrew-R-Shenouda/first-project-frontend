import "./getStarted.css";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="container">
      <div>
        <Link to={`/signin`} style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "#9370DB",
              color: "white",
              width: "200px",
            }}
            className="btn"
          >
            Log In
          </button>
        </Link>
      </div>

      <div>
        <Link to={`/signup`} style={{ textDecoration: "none" }}>
          <button className="btn btn-success mt-3" style={{ width: "200px" }}>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
export default GetStarted;
