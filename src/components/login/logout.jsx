import { Component } from "react";

class LougOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    localStorage.clear();
    window.location.replace("/")
  }

  render() {
    return "";
  }
}

export default LougOut;
