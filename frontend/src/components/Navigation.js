import React from "react";
import { withRouter } from "react-router-dom";
import { removeToken } from "../lib/TokenManager";
import { Link } from "react-router-dom";

const Navigation = ({ history }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <a
        href="#"
        onClick={() => {
          removeToken();
          history.push("/login");
        }}
      >
        {" "}
        Logout{" "}
      </a>
    </nav>
  );
};

export default withRouter(Navigation);
