import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
