import React from "react";
const Orders = (orders) => {
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
          {orders.orders.map((order, index) => (
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

export default Orders;
