import "./crypto.css";
import { FaRegTrashCan } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Navbar from "../Navbar/navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { convertToDollarFormat } from "../Util/util";
import { getSupportedCurrenciesBackend } from "./client";
import {
  addUserCurrenciesBackend,
  deleteUserCurrenciesBackend,
  getUserCurrenciesBackend,
  account,
} from "../Users/client";

import {
  setUserCurrencies,
  selectUserCurrencies,
  addCurrencyData,
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
  };

  /* Get currencies available to select */
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

  const [currentAccount, setCurrentAccount] = useState(null);

  const fetchAccount = async () => {
    const newAccount = await account();
    setCurrentAccount(newAccount);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  useEffect(() => {
    const fetchUserCurrencies = async () => {
      try {
        if (currentAccount) {
          const currencies = await getUserCurrenciesBackend(currentAccount._id);

          dispatch(setUserCurrencies(currencies));
        }
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchUserCurrencies();
  }, [currentAccount]);

  /* User adds a currency */
  const handleAddUserCurrency = (currency) => {
    if (
      currency !== null &&
      !userCurrencies.some(
        (item) => item.label === currency.label && item.value === currency.value
      )
    ) {
      addUserCurrenciesBackend(currency, currentAccount).then(fetchAccount);
    }
  };

  /* User deletes a currency */
  const handleDeleteUserCurrency = (currencyId) => {
    if (currencyId !== null) {
      deleteUserCurrenciesBackend(currencyId, currentAccount).then(
        fetchAccount
      );
    }
  };

  // useEffect(() => {
  //   console.log("actual user currency state", userCurrencies);
  // }, [userCurrencies]);

  useEffect(() => {
    // Create a websocket to talk to the backend
    const socket = new WebSocket("ws://localhost:4040");

    // Event listener for WebSocket connection opened
    socket.addEventListener("open", (event) => {
      console.log("WebSocket connection opened");
    });

    // Handle the received data as needed
    socket.addEventListener("message", (event) => {
      const blobData = event.data;

      // Convert Blob to text and then to JSON
      blobData.text().then((textData) => {
        const currencyData = JSON.parse(textData);
        //  console.log("Received message from server:", currencyData);
        dispatch(addCurrencyData(currencyData));
      });
    });

    // notify when connection is closed
    socket.addEventListener("close", (event) => {
      console.log("WebSocket connection closed:", event);
    });

    // notify when there is an error
    socket.addEventListener("error", (event) => {
      console.error("WebSocket error:", event);
    });
  }, []);

  return (
    <div>
      <Navbar />
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
            {userCurrencies.map((currency) => {
              const price = convertToDollarFormat(currency.price);
              return (
                <tr key={currency.value}>
                  <td>{currency.value}</td>
                  <td>{price || "loading..."}</td>
                  <td>
                    <Link
                      to={`/crypto/${currency.value}`}
                      key={currency.value}
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        className="btn"
                        style={{ backgroundColor: "#9370DB", color: "white" }}
                      >
                        see more
                      </button>
                    </Link>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteUserCurrency(currency._id)}
                    >
                      <FaRegTrashCan />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Crypto;
