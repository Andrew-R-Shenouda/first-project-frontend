import "./crypto.css";
import { FaRegTrashCan } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Navbar from "../Navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getSupportedCurrenciesBackend,
  getUserCurrenciesBackend,
  addUserCurrenciesBackend,
  deleteUserCurrenciesBackend,
} from "./client";

import {
  setUserCurrencies,
  selectUserCurrencies,
} from "./userCurrenciesSlice";

import {
  setSupportedCurrencies,
  selectSupportedCurrencies,
} from "./supportedCurrenciesSlice";

function Crypto() {
  const dispatch = useDispatch();
  const supportedCurrencies = useSelector(selectSupportedCurrencies);
  const userCurrencies = useSelector(selectUserCurrencies);

  /* Currency selected in search bar */
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const triggerSetSelectedCurrency = (selectedOption) => {
    setSelectedCurrency(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  /* Available currencies to select */
  useEffect(() => {
    const fetchSupportedCurrencies = async () => {
      try {
        const currencies = await getSupportedCurrenciesBackend();
        dispatch(setSupportedCurrencies(currencies));
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchSupportedCurrencies();
  }, []);

  /* Currencies user has selected so far */

  const fetchUserCurrencies = async () => {
    try {
      const currencies = await getUserCurrenciesBackend();
      dispatch(setUserCurrencies(currencies));
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  useEffect(() => {
    fetchUserCurrencies();
  }, []);

  /* User adds a currency */
  const handleAddUserCurrency = (currency) => {
    if (currency !== null) {
      addUserCurrenciesBackend(currency).then(fetchUserCurrencies);
    }
  };

  /* User adds a currency */
  const handleDeleteUserCurrency = (currency) => {
    deleteUserCurrenciesBackend(currency).then(fetchUserCurrencies);
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
                  options={supportedCurrencies}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      width: "300px",
                    }),
                  }}
                  onChange={triggerSetSelectedCurrency}
                />
              </th>
              <th style={{ width: "12%" }}>
                <button
                  className="btn btn-success"
                  onClick={() => handleAddUserCurrency(selectedCurrency)}
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
                    onClick={() => (
                      handleDeleteUserCurrency(currency),
                      console.log(userCurrencies)
                    )}
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
