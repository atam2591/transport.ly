import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Orders from "./components/Orders";
import ViewFlight from "./components/ViewFlight";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/view-flight/:id" element={<ViewFlight />} />
      </Routes>
    </Router>
  );
};

export default App;
