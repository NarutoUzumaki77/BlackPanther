import React, { Component } from "react";
import { getItem } from "../../services/fakeInventory";

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

    this.setState({
      detail,
      location: detail.location.name,
      details: detail.details.split(","),
    });
  }

  goBack = () => {
    this.props.history.push("/");
  };

  render() {
    const {
      color,
      product,
      manufacturer,
      type,
      purchase_date,
      status,
      name,
    } = this.state.detail;

    return (
      <React.Fragment>
        <div className="corners2 container" style={{ marginTop: "50px" }}>
          <div
            className="row"
            style={{ marginBottom: "10px", paddingLeft: "50px" }}
          >
            <div className="col-sm">Name</div>
            <div className="col-sm">{name}</div>
          </div>
          <div
            className="row"
            style={{ marginBottom: "10px", paddingLeft: "50px" }}
          >
            <div className="col-sm">Color</div>
            <div className="col-sm">{color}</div>
          </div>
          <div
            className="row"
            style={{ marginBottom: "10px", paddingLeft: "50px" }}
          >
            <div className="col-sm">Product</div>
            <div className="col-sm">{product}</div>
          </div>
          <div
            className="row"
            style={{ marginBottom: "10px", paddingLeft: "50px" }}
          >
            <div className="col-sm">Manufacturer</div>
            <div className="col-sm">{manufacturer}</div>
          </div>
          <div
            className="row"
            style={{ marginBottom: "10px", paddingLeft: "50px" }}
          >
            <div className="col-sm">Type</div>
            <div className="col-sm">{type}</div>
          </div>
          <div
            className="row"
            style={{ marginBottom: "10px", paddingLeft: "50px" }}
          >
            <div className="col-sm">Purchase Date</div>
            <div className="col-sm">{purchase_date}</div>
          </div>
          <div
            className="row"
            style={{ marginBottom: "10px", paddingLeft: "50px" }}
          >
            <div className="col-sm">location</div>
            <div className="col-sm">{this.state.location}</div>
          </div>
          <div
            className="row"
            style={{ marginBottom: "10px", paddingLeft: "50px" }}
          >
            <div className="col-sm">Status</div>
            <div className="col-sm">{status}</div>
          </div>
          <div
            className="row"
            style={{ marginBottom: "10px", paddingLeft: "50px" }}
          >
            <div className="col-sm">Details</div>
            <div className="col-sm">
              <ul>
                {this.state.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <i
          className="fa fa-backward back-arrow"
          aria-hidden="true"
          style={{ fontSize: "30px" }}
          onClick={this.goBack}
        ></i>
      </React.Fragment>
    );
  }
}

export default DeviceDetail;
