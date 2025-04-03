import React from "react";
import AboutUs from "./pages/Client/AboutUs/AboutUs";
import OrderManagement from "./pages/vendor/OrderManagement/OrderManagement";
import FeedbackForm from "./pages/Client/FeedbackForm/FeedbackForm";
import Header from "./component/Header/Header";
import Footer from "./component/footer/Footer";
import RequestForm from "./pages/Client/RequestForm/RequestForm";
import Unitbloodcost from "./pages/Vendor/UnitBloodCost/UnitBloodCost";
import Stockavailability from "./pages/Vendor/StockAvailability/StockAvailability";
import Profile from "./pages/Vendor/Vendorprofile/Vendorprofile";
import Receipt from "./pages/Client/Receipt/Receipt";
import Tracking from "./pages/Client/Tracking/Tracking";
import ClientDashboard from "./pages/client/clientdashboard/ClientDashboard";
import ClientDetails from "./pages/client/clientdetails/ClientDetails";
import { Route, Routes } from "react-router-dom";
import Transaction from "./pages/vendor/Transaction/Transaction";
import Inventory from "./pages/vendor/Inventory/Inventory";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" element={<ClientDashboard />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/order-management" element={<OrderManagement />} />
      </Routes> */}
      {/* <ClientDashboard /> */}
      <Inventory/>
      {/* <Transaction/> */}
      {/* <OrderManagement /> */}
      <Footer />
    </>
  );
}
//
export default App;
