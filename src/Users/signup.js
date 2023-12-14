import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import "./authentication.css";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/crypto");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred during signup");
      }
    }
  };
  return (
    <div className="container">
      <h3>Create an Account</h3>
      {error && <div>{error}</div>}
      <input
        className="form-control"
        value={credentials.username}
        placeholder="username"
        style={{ marginTop: "25px", width: "400px" }}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
      />
      <input
        className="form-control"
        value={credentials.password}
        placeholder="password"
        style={{ marginTop: "25px", width: "400px" }}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      />
      <button
        className="btn btn-success"
        style={{
          color: "white",
          width: "200px",
          marginTop: "25px",
        }}
        onClick={signup}
      >
        Signup
      </button>
    </div>
  );
}
export default Signup;
