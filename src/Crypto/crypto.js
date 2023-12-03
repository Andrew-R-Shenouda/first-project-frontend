import "./crypto.css";
import { FaRegTrashCan } from "react-icons/fa6";
import React from "react";
import Navbar from "../Navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserCurrency,
  removeUserCurrency,
  currentUserCurrencies,
} from "./userSelectedCurrenciesReducer";

import {
  addAdminCurrency,
  removeAdminCurrency,
  currentAdminCurrencies,
} from "./adminSelectedCurrienciesReducer";

function Crypto() {
  const dispatch = useDispatch();
  const adminCurrencies = useSelector(currentAdminCurrencies);
  const userCurrencies = useSelector(currentUserCurrencies);

  return (
    <div>
      <Navbar />
      <input
        className="element-container form-control"
        type="text"
        placeholder="Find a currency..."
      />
      <div className="element-container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Ticker Symbol</th>
              <th>USD</th>
              <th style={{ textAlign: "right" }}>
                {" "}
                <btn
                  className="btn btn-success"
                  onClick={() => dispatch(addUserCurrency())}
                >
                  Add Currency
                </btn>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "35%" }}>ETH</td>
              <td style={{ width: "35%" }}>$1000</td>
              <td style={{ width: "25%", textAlign: "right" }}>
                <btn
                  className="btn btn-danger"
                  onClick={() => dispatch(removeUserCurrency())}
                >
                  <FaRegTrashCan />
                </btn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Crypto;
