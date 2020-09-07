import React, { Component } from "react";
import { getItem } from "../../../services/fakeInventory";
import Reassign from "./reAssignedDevice";
import DeviceInfo from "./info";

class DeviceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      location: "",
      details: [],
    };
  }

  componentDidMount() {
    const detail = getItem(this.props.match.params.id);
    if (!detail) {
      this.props.history.push("/404");
      return;
    }

    this.setState({
      detail,
      location: detail.location.name,
      details: detail.details.split(","),
    });
  }

  render() {
    const { detail, location } = this.state;

    return (
      <div className="container">
        <div style={{ paddingLeft: "20px" }}>
          <h2>{detail.name}</h2>
          Purchased: {detail.purchase_date}
        </div>
        <div className="row">
          <div className="col-8">
            <DeviceInfo details={detail} location={location} />
          </div>
          <div className="col-4">
            <Reassign detail_id={this.props.match.params.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default DeviceDetail;
