import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import store from "./Store/index";
import Homepage from "./Homepage/homepage";
import Crypto from "./Crypto/crypto";
import Profile from "./Profile/profile";
import Currency from "./Currency/Currency";
import Signup from "./Users/signup";
import Signin from "./Users/signin";
import Account from "./Users/account";
import GetStarted from "./getStarted/getStarted";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/crypto/:CurrencyValue" element={<Currency />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}
export default App;
