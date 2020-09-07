import React, { Component } from "react";
import Pagination from "../common/pagination";
import DeviceTable from "./deviceTable";
import { paginate } from "../../utils/paginate";
import { getAllItems, deleteItem } from "../../services/fakeInventory";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { isAuthorized } from "../../utils/authorization";
import _ from "lodash";

class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      pageSize: 5,
      currentPage: 1,
      currentFilter: "",
      sortColumn: { path: "name", order: "asc" },
    };
  }

  componentDidMount() {
    const devices = getAllItems();
    this.setState({ devices });
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

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ currentFilter: value });
  };

  filterDevice = (search) => {
    if (search === "") return this.state.devices;

    return this.state.devices.filter((i) =>
      i.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  render() {
    const { devices, sortColumn, currentFilter } = this.state;
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

    const filtered_device = this.filterDevice(currentFilter);

    const sorted = _.orderBy(filtered_device, [sortColumn.path], [sortColumn.order]);

    const sorted_devices = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-auto">
            <h2>Devices</h2>
          </div>
          <div className="col">
            <h2 style={{ textAlign: "right" }}>
              {isAuthorized("post:device") && (
                <Link to="/devices/new">
                  <Button variant="primary">Add Device</Button>
                </Link>
              )}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Search device by Name"
              onChange={this.handleChange}
              style={{ borderRadius: "10px", marginBottom: "5px" }}
            ></input>
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
          itemsCount={filtered_device.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default Devices;
