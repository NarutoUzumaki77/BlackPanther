import React, { Component } from "react";
import Device from "./device";
import TableHeader from "../common/tableHeader";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import { getAllInventoryItems } from "../../services/fakeInventory";
import _ from "lodash";

class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      pageSize: 3,
      currentPage: 1,
      sortColumn: { path: "name", order: "asc" },
    };
  }

  componentDidMount() {
    const devices = getAllInventoryItems();
    this.setState({ devices });
  }

  handleSort = (sortColumn) => {
    console.log(sortColumn);
    this.setState({ sortColumn });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
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
        <h2>Devices</h2>
        <table className="table">
          <TableHeader
            columns={columns}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <tbody>
            {sorted_devices.map((device) => (
              <Device device={device} key={device.id} />
            ))}
          </tbody>
        </table>
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

export default Devices;
