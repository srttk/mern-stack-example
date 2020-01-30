import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth-actions";

const Navigation = ({ history, logout, auth }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {!auth && (
        <span>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </span>
      )}

      {auth && (
        <a
          href="#"
          onClick={() => {
            logout();
            history.push("/login");
          }}
        >
          Logout
          {" " + auth.firstName}
        </a>
      )}
    </nav>
  );
};
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(withRouter(Navigation));
