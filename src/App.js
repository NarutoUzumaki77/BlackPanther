import React, { Component } from "react";
import NavBar from "./components/common/navbar";
import Devices from "./components/devices/devices";
import DeviceDetails from "./components/devices/deviceDetail";
import LoginForm from "./components/login/loginForm";
import DeviceForm from "./components/devices/deviceForm";
import NotFound from "./components/notFound";
import LougOut from "./components/login/logout";
import { decode_token } from "./utils/authorization";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = decode_token();
    console.log(user);
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {!user && <LoginForm />}
        {user && <NavBar user={user} />}
        {user && (
          <main role="main" className="container">
            <Switch>
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={LougOut} />
              <Route exact path="/devices/new" component={DeviceForm} />
              <Route exact path="/devices/edit/:id" component={DeviceForm} />
              <Route exact path="/devices/:id" component={DeviceDetails} />
              <Route path="/devices" component={Devices} />
              <Route exact path="/">
                <Redirect to="devices" />
              </Route>
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </main>
        )}
      </div>
    );
  }
}

export default App;
