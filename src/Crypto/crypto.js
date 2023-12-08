import "./crypto.css";
import { FaRegTrashCan } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Navbar from "../Navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "./client";
import {
  addUserCurrency,
  removeUserCurrency,
  selectUserCurrencies,
} from "./userCurrenciesSlice";

import {
  setAdminCurrencies,
  selectAdminCurrencies,
} from "./adminCurrenciesSlice";

function Crypto() {
  const dispatch = useDispatch();
  const adminCurrencies = useSelector(selectAdminCurrencies);
  const userCurrencies = useSelector(selectUserCurrencies);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const currencies = await getCurrencies();
        dispatch(setAdminCurrencies(currencies));
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedCurrency(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div>
      <Navbar />
      <input
        className="element-container form-control"
        type="text"
        placeholder="Search your dashboard..."
      />

      <div className="element-container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>Ticker Symbol</th>
              <th style={{ width: "30%" }}>USD</th>
              <th style={{ width: "12%" }}>
                <Select
                  className="basic-single float-end"
                  classNamePrefix="select"
                  defaultValue={""}
                  isDisabled={false}
                  isLoading={false}
                  isClearable={true}
                  isRtl={false}
                  isSearchable={true}
                  name="search-currencies"
                  options={adminCurrencies}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      width: "300px",
                    }),
                  }}
                  onChange={handleChange}
                />
              </th>
              <th style={{ width: "12%" }}>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(addUserCurrency(selectedCurrency))}
                >
                  Add Currency
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {userCurrencies.map((currency) => (
              <tr key={currency.value}>
                <td>{currency.value}</td>
                <td>$1000</td>
                <td></td>
                <td style={{ textAlign: "right" }}>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeUserCurrency(currency.value))}
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Crypto;
