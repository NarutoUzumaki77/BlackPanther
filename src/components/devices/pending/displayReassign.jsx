import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DisplayReassignDevice = ({ pending }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Device</th>
          <th scope="col">Type</th>
          <th scope="col">To</th>
          <th scope="col">Date Assigned</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {pending.map((p) => (
          <tr key={p.device.id}>
            <Link to={`/devices/${p.device.id}`}>
              <td>{p.device.name}</td>
            </Link>
            <td>{p.device.type}</td>
            <td>{p.to.firstName}</td>
            <td>{p.date_assigned}</td>
            <td>
              <Button variant="danger">Cancel</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayReassignDevice;
