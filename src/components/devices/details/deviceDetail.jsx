import React, { Component } from "react";
import { getItem } from "../../../services/fakeInventory";
import Reassign from "./reAssignedDevice";
import DeviceInfo from "./info";
import RepairHistory from "./deviceRepairHistory";
import RelatedDevices from "./relatedDevices";

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
        <div style={{ paddingLeft: "10px" }}>
          <h3>{detail.name}</h3>
          <span style={{ color: "grey", fontSize: "13px" }}>
            Purchased: {detail.purchase_date}
          </span>
        </div>
        <div className="row">
          <div className="col-8">
            <DeviceInfo details={detail} location={location} />
          </div>
          <div className="col-4">
            <Reassign detail_id={this.props.match.params.id} />
            <RepairHistory />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <RelatedDevices detail_id={this.props.match.params.id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default DeviceDetail;
