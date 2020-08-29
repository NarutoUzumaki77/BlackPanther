import React from "react";
import NavBar from "./components/common/navbar";
import Devices from './components/devices/devices';
// import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <main role="main" className="container">
        <Devices />
      </main>
    </div>
  );
}

export default App;
