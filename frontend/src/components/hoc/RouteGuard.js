import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken, isAuthenticated } from "../../lib/TokenManager";

export const AuthRoute = ({ component, ...rest }) => {
  if (isAuthenticated()) {
    return <Route component={component} {...rest} />;
  }

  return <Redirect to="/login" />;
};

export const GuestRoute = ({ component, ...rest }) => {
  if (!isAuthenticated()) {
    return <Route component={component} {...rest} />;
  }

  return <Redirect to="/dashboard" />;
};
