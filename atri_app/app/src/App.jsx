import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Viewtest from "./pages/Viewtest.jsx";
import Newtest from "./pages/Newtest.jsx";
import Newtestresult from "./pages/Newtestresult.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/viewtest" element={<Viewtest />} />
<Route path="/newtest" element={<Newtest />} />
<Route path="/newtestresult" element={<Newtestresult />} />
<Route path="/login" element={<Login />} />
    </Routes>
  );
}
