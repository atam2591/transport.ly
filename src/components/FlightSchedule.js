import React from "react";
import { Link } from "react-router-dom";

import "../styles/table-layout.css";

const FlightSchedule = ({ title, flightInfo, orders }) => {
  return (
    <div>
      <h3 className="table-title">{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Flights</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>View Flight</th>
          </tr>
        </thead>
        <tbody>
          {flightInfo.map((flight) => (
            <tr key={flight.flight_number}>
              <td>{flight.flight_number}</td>
              <td>{flight.departure_city}</td>
              <td>{flight.arrival_city}</td>
              <td>
                <Link to={`/view-flight/${flight.flight_number}`} state={{ orders }} className="btn">
                  View Flight
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightSchedule;
