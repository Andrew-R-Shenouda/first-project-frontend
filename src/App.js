import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import Homepage from "./Homepage/homepage";
import store from "./Store/index";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}
export default App;
