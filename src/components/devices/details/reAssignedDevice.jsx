import React from "react";
import Form from "../../common/form";
import Joi from "joi-browser";
import { decode_token } from "../../../utils/authorization";
import { getAllUser, getUserProfile } from "../../../services/fakeUserProfile";
import {
  isItemAssignedToUser,
  assignItemToUser,
} from "../../../services/fakeInventory";

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
      canReassignUser: true,
    };
  }

  schema = {
    users: Joi.required().label("Users"),
  };

  componentDidMount = () => {
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

    const isDeviceAssignedToUser = isItemAssignedToUser(
      this.props.detail_id,
      currentUser.profile.id
    );

    this.setState({
      currentUser,
      options: allUsers,
      selectedOption: allUsers[0].name,
      data: { users: allUsers },
      canReassignUser: isDeviceAssignedToUser,
    });
  };

  doSubmit = () => {
    const inventoryId = this.props.detail_id;
    let email = this.state.selectedOption;
    email = email.split("-");
    email = email[1].trim();

    const new_user = getUserProfile(email);

    assignItemToUser(inventoryId, new_user.id);
  };

  render() {
    const { canReassignUser } = this.state;

    return (
      <div>
        <div className="div-heading">Reassign Device</div>
        <div className="device-body">
          <form onSubmit={this.handleSubmit}>
            {this.renderSelect("users", "")}
            <button
              disabled={!canReassignUser}
              type="Save"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Reassign;
