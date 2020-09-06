import React, { Component } from "react";
import {
  getAssignInventoryByUserId,
  getReAssignedDevices,
} from "../../../services/fakeInventory";
import DisplayReassignDevice from "./displayReassign";

class PendingDeviceStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: [],
    };
  }

  componentDidMount() {
    const signInUser = this.props.user.profile;
    const devicesAssigned = getAssignInventoryByUserId(signInUser.id);
    let pending = devicesAssigned.filter((a) => a.status === "pending");

    pending = getReAssignedDevices(pending);

    this.setState({ pending });
  }

  render() {
    const { pending } = this.state;
    console.log(pending);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm div-heading" style={{ marginRight: "15px" }}>
            Pending Assigned Device
          </div>
          <div className="col-sm div-heading" style={{ marginRight: "15px" }}>
            Reassigned Device
          </div>
        </div>
        <div className="row">
          <div className="col-sm div-body" style={{ marginRight: "15px" }}>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm div-body" style={{ marginRight: "15px" }}>
            <DisplayReassignDevice pending={pending} />
          </div>
        </div>
      </div>
    );
  }
}

export default PendingDeviceStatus;
