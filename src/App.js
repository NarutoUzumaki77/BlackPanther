import React from "react";
import NavBar from "./components/common/navbar";
import Devices from "./components/devices/devices";
import DeviceDetails from "./components/devices/deviceDetail";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <main role="main" className="container">
        <Switch>
          <Route path="/devices/:id" component={DeviceDetails} />
          <Route path="/devices" component={Devices} />
          <Route exact path="/">
            <Redirect to="devices" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
