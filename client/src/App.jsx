import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import "./App.css";
import Home from "./routes/Home/home";
import Login from "./routes/Home/login";
import Register from "./routes/Home/register";
import Vehicle from "./routes/Vehicle/vehicle";
import VehicleInfo from "./routes/Vehicle/vehicleInfo";
import AddAdmin from "./routes/Admin/addAdmin";
import AddCar from "./routes/Admin/addCar";
import ManageCars from "./routes/Admin/manageCars";
import ManageDrivers from "./routes/Admin/manageDrivers";
import ManageAppointments from "./routes/Customer/manageAppointments";
import ViewCars from "./routes/Customer/viewCars";


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/vehicles" element={<Vehicle/>} />
          <Route exact path="/vehicle/:_id" element={<VehicleInfo/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/admin/adminadd" element={<AddAdmin/>}/>
          <Route exact path="/admin/carAdd" element={<AddCar/>}/>
          <Route exact path="/admin/cars" element={<ManageCars/>}/>
          <Route exact path="admin/drivers" element={<ManageDrivers/>}/>
          <Route exact path="/user/appointments" element={<ManageAppointments/>}/>
          <Route exact path="user/carView" element={<ViewCars/>}/>
        </Routes>
        Footer
      </Router>
    </>
  )
}

export default App
