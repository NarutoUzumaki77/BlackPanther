import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { isAuthorized } from "../../utils/authorization";

const Device = (props) => {
  const { device, onDelete } = props;
  return (
    <tr>
      <td>
        <Link to={`/devices/${device.id}`}>{device.name}</Link>
      </td>
      <td>{device.status}</td>
      <td>{device.product}</td>
      <td>{device.type}</td>
      <td>{device.color}</td>
      <td>{device.location.name}</td>
      <td>{device.manufacturer}</td>
      <td>
        {isAuthorized("delete:device") && (
          <Link
            to={`/devices/edit/${device.id}`}
            style={{ marginRight: "10px" }}
          >
            <Button variant="primary">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Button>
          </Link>
        )}

        {isAuthorized("delete:device") && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete(device)}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        )}
      </td>
    </tr>
  );
};

export default Device;
