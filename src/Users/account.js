import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./authentication.css";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/signin");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      <h1>Account</h1>
      {account && (
        <div>
          <input
            className="form-control"
            placeholder="First Name"
            style={{ width: "400px", marginTop: "20px" }}
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            className="form-control"
            placeholder="Last Name"
            style={{ width: "400px", marginTop: "20px" }}
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            className="form-control"
            placeholder="Date of Birth"
            style={{ width: "400px", marginTop: "20px" }}
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            className="form-control"
            placeholder="Email"
            style={{ width: "400px", marginTop: "20px" }}
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <input
            className="form-control"
            placeholder="password"
            style={{ width: "400px", marginTop: "20px" }}
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <select
            className="form-control"
            style={{ width: "400px", marginTop: "20px" }}
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
          <button
            className="btn btn-success"
            style={{ width: "190px", marginTop: "20px" }}
            onClick={save}
          >
            Save
          </button>
          <button
            className="btn btn-danger"
            style={{ width: "190px", marginTop: "20px", marginLeft: "20px" }}
            onClick={signout}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
export default Account;
