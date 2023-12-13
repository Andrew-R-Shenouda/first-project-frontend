import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import store from "./Store/index";
import Homepage from "./Homepage/homepage";
import Crypto from "./Crypto/crypto";
import Profile from "./Profile/profile";
import Currency from "./Currency/Currency";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
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
