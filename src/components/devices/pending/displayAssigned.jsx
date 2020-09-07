import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DisplayAssignedDevices = ({ assigned, handleAccept, handleCancel }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Device</th>
          <th scope="col">Type</th>
          <th scope="col">From</th>
          <th scope="col">Date Assigned</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {assigned.map((p) => (
          <tr key={p.device.id}>
            <td>
              <Link to={`/devices/${p.device.id}`}>{p.device.name}</Link>
            </td>
            <td>{p.device.type}</td>
            <td>{p.from.firstName}</td>
            <td>{p.date_assigned}</td>
            <td style={{ textAlign: "right" }}>
              <Button
                variant="success"
                style={{ marginRight: "5px" }}
                onClick={() => handleAccept(p)}
              >
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
              </Button>
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

export default DisplayAssignedDevices;
