import React, { Component } from "react";

const Device = (props) => {
  const { device } = props;
  return (
    <tr>
      <th>{device.name}</th>
      <td>{device.status}</td>
      <td>{device.product}</td>
      <td>{device.type}</td>
      <td>{device.color}</td>
      <td>{device.location.name}</td>
      <td>{device.manufacturer}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginRight: "10px" }}
        >
          Edit
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Device;
