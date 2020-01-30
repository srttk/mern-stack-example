import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navigation.css";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { USER_LOGGED_OUT } from "../actions/auth-types";
import { httpClient } from "../api";
import { removeToken } from "../lib/TokenManager";

class Navigation extends Component {
  componentDidMount() {
    httpClient.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 401) {
          const msg = error.response.data.message || "Authentication errror";
          alert(msg);

          this.props.dispatch({ type: USER_LOGGED_OUT });
          removeToken();
          if (error.config.url !== "login") {
            this.props.history.push("/login");
          }
        }
        return Promise.reject(error);
      }
    );
  }
  render() {
    const { history, logout, auth } = this.props;
    return (
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        {!auth && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
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
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(withRouter(Navigation));
