import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { decode_token } from "../../utils/authorization";
import { getAllUser } from "../../services/fakeUserProfile";

class Reassign extends Form {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      data: {
        users: {},
      },
      options: [],
      selectedOption: "",
    };
  }

  schema = {
    users: Joi.required().label("Users"),
  };

  componentDidMount() {
    const currentUser = decode_token();
    let allUsers = getAllUser();

    // Filter out currentUser, as you can not assign to self
    allUsers = allUsers.filter((user) => user.id !== currentUser.profile.id);

    allUsers = allUsers.map((user) => {
      return {
        name: `${user.firstName} ${user.lastName} - ${user.email}`,
        id: user.id,
      };
    });

    this.setState({
      options: allUsers,
      selectedOption: allUsers[0].name,
      data: { users: allUsers },
    });
  }

  doSubmit = () => {
    console.log(this.state.selectedOption);
  };

  render() {
    return (
      <div>
        <h4>Reassign Device</h4>
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("users", "Users")}
          <button
            disabled={this.validate()}
            type="Save"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Reassign;
