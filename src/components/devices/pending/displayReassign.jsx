import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DisplayReassignDevice = ({ reassigned, handleCancel }) => {
  const length = reassigned.length;
  return (
    <React.Fragment>
      {length === 0 ? (
        <h6>None</h6>
      ) : (
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
            {reassigned.map((p) => (
              <tr key={p.device.id}>
                <td>
                  <Link to={`/devices/${p.device.id}`}>{p.device.name}</Link>
                </td>
                <td>{p.device.type}</td>
                <td>{p.to.firstName}</td>
                <td>{p.date_assigned}</td>
                <td style={{ textAlign: "right" }}>
                  <Button variant="danger" onClick={() => handleCancel(p)}>
                    <i className="fa fa-ban" aria-hidden="true"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};

export default DisplayReassignDevice;
