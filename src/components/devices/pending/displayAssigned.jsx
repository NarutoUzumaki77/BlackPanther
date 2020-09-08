import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DisplayAssignedDevices = ({ assigned, handleAccept, handleCancel }) => {
  const length = assigned.length;
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
                  <div>
                    {" "}
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};

export default DisplayAssignedDevices;
