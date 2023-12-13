import "./Currency.css";
import Navbar from "../Navbar/navbar";
import { selectUserCurrencies } from "../Crypto/userCurrenciesSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { convertToDollarFormat, convertToNumberFormat } from "../Util/util";

function Currency() {
  const { CurrencyValue } = useParams();
  const userCurrencies = useSelector(selectUserCurrencies);
  const currentCurrency = userCurrencies.find(
    (item) => item.value === CurrencyValue
  );

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          className="table table-bordered mt-3"
          style={{
            width: "40%",
          }}
        >
          <thead>
            <th
              colSpan="2"
              style={{
                textAlign: "center",
              }}
            >
              {currentCurrency.label || "loading..."} -{" "}
              {currentCurrency.value || "loading..."}
            </th>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td>
                {convertToDollarFormat(currentCurrency.price) || "loading..."}
              </td>
            </tr>
            <tr>
              <td>24 Hour High</td>
              <td>
                {convertToDollarFormat(currentCurrency.high_24h) ||
                  "loading..."}
              </td>
            </tr>
            <tr>
              <td>24 Hour Low</td>
              <td>
                {convertToDollarFormat(currentCurrency.low_24h) || "loading..."}
              </td>
            </tr>
            <tr>
              <td> Volume in the past 24 Hours</td>
              <td>
                {convertToNumberFormat(currentCurrency.volume_24h) ||
                  "loading..."}
              </td>
            </tr>
            <tr>
              <td> Volume in the past 30 days</td>
              <td>
                {convertToNumberFormat(currentCurrency.volume_30d) ||
                  "loading..."}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Currency;
