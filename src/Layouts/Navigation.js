import React from "react";
import { NavLink, Route } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/kakao">카카오</NavLink>
          </li>
          <li>
            <NavLink to="/friends">프렌즈</NavLink>
          </li>
          <li>
            <NavLink to="/love">사랑해</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;
