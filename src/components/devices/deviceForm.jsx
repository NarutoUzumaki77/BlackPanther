import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class DeviceForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
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
    detail: Joi.string().required().label("Detail"),
  };

  componentDidMount() {
    const { device } = this.props;
    if (!device) return;
  }

  render() {
    return <h1>Device Form</h1>;
  }
}

export default DeviceForm;
