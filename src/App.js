import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import store from "./Store/index";
import Homepage from "./Homepage/homepage";
import Crypto from "./Crypto/crypto"
import Profile from "./Profile/profile";


function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}
export default App;
