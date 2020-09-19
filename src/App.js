import React from "react";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.changeValue}</h1>
        <Button name={`INCRMENT`} action={this._increment} />
        <Button name={`DECRMENT`} action={this._decrement} />
      </div>
    );
  }

  _increment = () => {
    this.setState((prevState) => {
      return { changeValue: prevState.changeValue + 1 };
    });
  };
  _decrement = () => {
    this.setState((prevState) => {
      return { changeValue: prevState.changeValue - 1 };
    });
  };
}
export default App;
