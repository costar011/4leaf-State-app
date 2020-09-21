import React from "react";
import Button from "./Button";
import Navigation from "./Layouts/Navigation";
import Kakao from "./Screens/kakao";
import Friends from "./Screens/Friends";
import Love from "./Screens/Love";
import { Route } from "react-router-dom";

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
        <Route path="/" component={Navigation} />

        <Route exact path="/kakao" component={Kakao} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/love" component={Love} />

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
