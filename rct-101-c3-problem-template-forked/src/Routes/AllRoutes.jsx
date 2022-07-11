import { Routes, Route } from "react-router-dom";
// import PrivateRoute from "../Components/PrivateRoute";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";

function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* <Home/>{" "} */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* <Route></Route> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;
