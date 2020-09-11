import React, { Component } from "react";
import { getAllItems, getItem } from "../../../services/fakeInventory";

class RelatedDevices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      related_devices: [],
    };
  }

  componentDidMount() {
    const device = getItem(this.props.detail_id);
    const type = device.type;
    const all_devices = getAllItems();

    const devices = all_devices.filter((d) => d.type === type);
    let related_devices = devices.filter((d) => d.id !== device.id);

    if (related_devices.length > 2) {
      related_devices = related_devices.splice(0, 2);
    }
    this.setState({ related_devices });
  }

  render() {
    return (
      <div>
        <div className="div-heading">Related Devices</div>
        <div className="device-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Product</th>
                <th scope="col">Color</th>
                <th scope="col">Location</th>
                <th scope="col">Manufacturer</th>
              </tr>
            </thead>
            <tbody>
              {this.state.related_devices.map((d) => (
                <tr key={d.id}>
                  <td>{d.name}</td>
                  <td>{d.status}</td>
                  <td>{d.product}</td>
                  <td>{d.color}</td>
                  <td>{d.location.name}</td>
                  <td>{d.manufacturer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RelatedDevices;
