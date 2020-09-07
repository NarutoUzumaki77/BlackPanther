import React, { Component } from "react";
import {
  getAssignInventoryByUserId,
  getReAssignedDevices,
  cancelReassignedDevice,
  getAssignInventoryByNewUserId,
  getAssignedDevices,
  acceptAssignedDevice,
  cancelAssignedDevice,
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

    const reassigned = [...this.state.reassigned];
    let ItemInDB = reassigned.find((i) => i.id === device.id);
    reassigned.splice(reassigned.indexOf(ItemInDB), 1);

    this.setState({ reassigned });
  };

  handleCancelassignedDevice = (device) => {
    cancelAssignedDevice(device);

    const assigned = [...this.state.assigned];
    let ItemInDB = assigned.find((i) => i.id === device.id);
    assigned.splice(assigned.indexOf(ItemInDB), 1);

    this.setState({ assigned });
  };

  handleAcceptDevice = (device) => {
    acceptAssignedDevice(device);

    const signInUser = this.props.user.profile;
    const devicesAssigned = getAssignInventoryByNewUserId(signInUser.id);
    let assigned = devicesAssigned.filter((a) => a.status === "pending");
    assigned = getAssignedDevices(assigned);

    this.setState({ assigned });
  };

  render() {
    const { reassigned, assigned } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="div-heading">Pending Assigned Device</div>
            <div className="div-body">
              {" "}
              <DisplayAssignedDevices
                assigned={assigned}
                handleAccept={this.handleAcceptDevice}
                handleCancel={this.handleCancelassignedDevice}
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="div-heading">Reassigned Device</div>
            <div className="div-body">
              <DisplayReassignDevice
                reassigned={reassigned}
                handleCancel={this.handleCancelReassignedDevice}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PendingDeviceStatus;
