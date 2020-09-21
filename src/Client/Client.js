import React from "react";
import App from "../App";
import { HashRouter } from "react-router-dom";

class Client extends React.Component {
  render() {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
  }
}

export default Client;
