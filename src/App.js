import React from "react";
import NavBar from "./components/common/navbar";
import DeviceTable from "./components/devices/deviceTable";
// import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <main role="main" className="container">
        <DeviceTable />
      </main>
    </div>
  );
}

export default App;
