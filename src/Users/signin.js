import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./authentication.css";

function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/crypto");
  };
  return (
    <div className="container">
      <h3>Welcome Back</h3>
      <input
        className="form-control enter"
        style={{
          width: "400px",
        }}
        placeholder="username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        className="form-control enter"
        style={{
          width: "400px",
        }}
        placeholder="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button
        className="btn enter"
        style={{
          backgroundColor: "#9370DB",
          color: "white",
          width: "200px",
        }}
        onClick={signin}
      >
        {" "}
        Log in{" "}
      </button>
    </div>
  );
}
export default Signin;
