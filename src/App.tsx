import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import SignUp from "./components-login/signUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
    </Router>
  );
};

export default App;
