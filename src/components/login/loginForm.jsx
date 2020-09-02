import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { signIn } from "../../services/fakeUserCredential";
import { Button } from "react-bootstrap";

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: "",
      },
      errors: {},
    };
  }

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).max(30).required().label("Password"),
  };

  doSubmit = () => {
    const { username, password } = this.state.data;
    const token = signIn(username, password);
    if (!token) {
      const errors = { ...this.state.errors };
      errors.password = "Username or Password is Incorrect";
      this.setState({ errors });
      return;
    }

    localStorage.setItem("token", token);
    // this.props.history.push("/devices");
    window.location.reload(false);
  };

  render() {
    return (
      <div
        className="center"
        style={{ width: "400px", textAlign: "left", fontWeight: "bold" }}
      >
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <Button variant="primary" type="Save" disabled={this.validate()}>
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
