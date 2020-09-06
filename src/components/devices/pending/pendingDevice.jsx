import React, { Component } from "react";
import {
  getAssignInventoryByUserId,
  getReAssignedDevices,
  cancelReassignedDevice,
  getAssignInventoryByNewUserId,
  getAssignedDevices,
} from "../../../services/fakeInventory";
import DisplayReassignDevice from "./displayReassign";
import DisplayAssignedDevices from "./displayAssigned";

class PendingDeviceStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reassigned: [],
      assigned: [],
    };
  }

  componentDidMount() {
    const signInUser = this.props.user.profile;

    const devicesReassigned = getAssignInventoryByUserId(signInUser.id);
    let reassigned = devicesReassigned.filter((a) => a.status === "pending");
    reassigned = getReAssignedDevices(reassigned);

    const devicesAssigned = getAssignInventoryByNewUserId(signInUser.id);
    let assigned = devicesAssigned.filter((a) => a.status === "pending");
    assigned = getAssignedDevices(assigned);

    this.setState({ reassigned, assigned });
  }

  handleCancelReassignedDevice = (device) => {
    cancelReassignedDevice(device);

    const reassigned = [...this.state.pending];
    let ItemInDB = reassigned.find((i) => i.id === device.id);
    reassigned.splice(reassigned.indexOf(ItemInDB), 1);

    this.setState({ reassigned });
  };

  render() {
    const { reassigned, assigned } = this.state;
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
            <DisplayAssignedDevices assigned={assigned} />
          </div>
          <div className="col-sm div-body" style={{ marginRight: "15px" }}>
            <DisplayReassignDevice
              reassigned={reassigned}
              handleCancel={this.handleCancelReassignedDevice}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PendingDeviceStatus;
