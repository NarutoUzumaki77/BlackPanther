import React from "react";
import Form from "../common/form";
import { getInventoryItem } from "../../services/fakeInventory";
import Joi from "joi-browser";

class DeviceForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      data: {
        name: "",
        color: "",
        product: "",
        manufacturer: "",
        type: "",
        purchase_date: "",
        location: "",
        status: "",
        details: "",
      },
    };
  }

  schema = {
    name: Joi.string().required().label("Name"),
    color: Joi.string().required().label("Color"),
    product: Joi.string().required().label("Product"),
    manufacturer: Joi.string().required().label("Manufacturer"),
    type: Joi.string().required().label("Type"),
    purchase_date: Joi.string().label("Purchase Date"),
    location: Joi.string().required().label("Location"),
    status: Joi.string().required().label("Status"),
    details: Joi.string().required().label("Detail"),
  };

  componentDidMount() {
    const device_id = this.props.match.params.id;
    if (!device_id) return;

    const device = getInventoryItem(device_id);
    this.setState({
      data: {
        name: device.name,
        color: device.color,
        product: device.product,
        manufacturer: device.manufacturer,
        type: device.type,
        purchase_date: device.purchase_date,
        location: device.location.name,
        status: device.status,
        details: device.details,
      }
    })
  }

  doSubmit = () => {
    console.log("Submit clicked");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderInput("color", "Color")}
        {this.renderInput("product", "Product")}
        {this.renderInput("manufacturer", "Manufacturer")}
        {this.renderInput("type", "Type")}
        {this.renderInput("purchase_date", "Purchase Date")}
        {this.renderInput("location", "Location")}
        {this.renderInput("details", "Details")}
        <button
          disabled={this.validate()}
          type="Save"
          className="btn btn-primary"
        >
          Save
        </button>
      </form>
    );
  }
}

export default DeviceForm;
