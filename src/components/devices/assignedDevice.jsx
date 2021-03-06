import React, { Component } from "react";
import { getAllItems, deleteItem } from "../../services/fakeInventory";
import { decode_token } from "../../utils/authorization";
import { paginate } from "../../utils/paginate";
import DeviceTable from "./deviceTable";
import Pagination from "../common/pagination";
import _ from "lodash";

class AssignedDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      pageSize: 5,
      currentPage: 1,
      sortColumn: { path: "name", order: "asc" },
    };
  }

  componentDidMount() {
    const devices = getAllItems();
    const user = decode_token();
    let assigned_device = devices.filter(
      (device) =>
        device.assigned.id === user.profile.id
    );
    this.setState({ devices: assigned_device });
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = (device) => {
    const devices = this.state.devices.filter((d) => d.id !== device.id);
    deleteItem(device.id);
    this.setState({ devices });
  };

  render() {
    const { devices, sortColumn } = this.state;
    const columns = [
      { path: "name", label: "Name" },
      { path: "status", label: "Status" },
      { path: "product", label: "Product" },
      { path: "type", label: "Type" },
      { path: "color", label: "Color" },
      { path: "location", label: "Location" },
      { path: "manufacturer", label: "Manufacturer" },
      { path: "tenant", label: "Tenant" },
      { path: "h" },
    ];
    const sorted = _.orderBy(devices, [sortColumn.path], [sortColumn.order]);

    const sorted_devices = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-auto">
            <h2>Assigned Devices</h2>
          </div>
        </div>
        <DeviceTable
          columns={columns}
          onSort={this.handleSort}
          onDelete={this.handleDelete}
          sortColumn={sortColumn}
          devices={sorted_devices}
        />
        <Pagination
          itemsCount={devices.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default AssignedDevice;
