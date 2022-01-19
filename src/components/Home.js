import React, { useEffect, useState } from "react";
import "../app.css";
import FlightSchedule from "./FlightSchedule";
import Orders from "./Orders";
import flightData from "../data/coding-assignment-schedule.json";
import orderData from "../data/coding-assigment-orders.json";
const Home = () => {
  const [toggle, setToggle] = useState(false);
  const handleViewOrder = () => {
    setToggle(!toggle);
  };

  const [dayOneFlights, setDayOneflights] = useState([]);
  const [dayTwoFlights, setDayTwoflights] = useState([]);
  const [orders] = useState([]);

  useEffect(() => {
    const dayOneFlight = flightData.filter((flight) => flight.day === 1);
    const dayTwoFlight = flightData.filter((flight) => flight.day === 2);
    setDayOneflights(dayOneFlight);
    setDayTwoflights(dayTwoFlight);

    for (const [key, value] of Object.entries(orderData)) {
      const flightInfo = Object.assign(
        { order: key },
        { flight_info: dayOneFlight.filter((item) => item.arrival_city === value.destination) }
      );
      if (Object.keys(flightInfo.flight_info).length !== 0) {
        orders.push(flightInfo);
      }
    }

    for (const [key, value] of Object.entries(orderData)) {
      const flightInfo = Object.assign(
        { order: key },
        { flight_info: dayTwoFlight.filter((item) => item.arrival_city === value.destination) }
      );
      if (Object.keys(flightInfo.flight_info).length !== 0) {
        orders.push(flightInfo);
      }
    }
  }, []);
  return (
    <div className="container">
      <header>
        <div className="title">
          <h1>Transport.ly</h1>
          <p>An automated air frieght scheduling service.</p>
        </div>
        <button className="btn" onClick={handleViewOrder}>
          {toggle ? "View Flight Schedule" : "View Order Schedule"}
        </button>
      </header>

      {toggle ? (
        <div>
          <Orders orders={orders} />
        </div>
      ) : (
        <div>
          <FlightSchedule title="Schedule flights for day 1" flightInfo={dayOneFlights} orders={orders} />
          <FlightSchedule title="Schedule flights for day 2" flightInfo={dayTwoFlights} orders={orders} />
        </div>
      )}
    </div>
  );
};

export default Home;
