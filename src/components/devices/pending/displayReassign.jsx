import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DisplayReassignDevice = ({ pending, handleCancel }) => {
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
            <td>
              <Link to={`/devices/${p.device.id}`}>{p.device.name}</Link>
            </td>
            <td>{p.device.type}</td>
            <td>{p.to.firstName}</td>
            <td>{p.date_assigned}</td>
            <td>
              <Button variant="danger" onClick={() => handleCancel(p)}>
                <i className="fa fa-ban" aria-hidden="true"></i>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayReassignDevice;
