import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

const ViewFlight = () => {
  const location = useLocation();
  const flights = location.state;
  const { id } = useParams();

  const [viewFlight, setViewFlight] = useState([]);

  useEffect(() => {
    const filteredFlight = flights.orders.filter((item) => item.flight_info[0].flight_number == id);
    setViewFlight(filteredFlight);
  }, []);
  return (
    <div>
      <h3 className="table-title">Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Flight</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {viewFlight.map((order, index) => (
            <tr key={index}>
              <td>{order.order}</td>
              <td>{order.flight_info[0].flight_number}</td>
              <td>{order.flight_info[0].departure_city}</td>
              <td>{order.flight_info[0].arrival_city}</td>
              <td>{order.flight_info[0].day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFlight;
