import React, { Component } from "react";
import { getAllInventoryItems } from "../../services/fakeInventory";

class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = { devices: [] };
  }

  componentDidMount() {
    const devices = getAllInventoryItems();
    this.setState({ devices });
  }

  render() {
    const { devices } = this.state;

    return (
      <div className="container">
        <h2>Devices</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Product</th>
              <th scope="col">Type</th>
              <th scope="col">Color</th>
              <th scope="col">Location</th>
              <th scope="col">Manufacturer</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {devices.map((d) => (
              <tr>
                <th>{d.name}</th>
                <td>{d.status}</td>
                <td>{d.product}</td>
                <td>{d.type}</td>
                <td>{d.color}</td>
                <td>{d.location.name}</td>
                <td>{d.manufacturer}</td>
                <td>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Devices;
