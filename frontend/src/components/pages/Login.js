import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, Field } from "formik";
import { setToken } from "../../lib/TokenManager";
import { Login as LoginRequest } from "../../api";

const Login = ({ history }) => {
  return (
    <div>
      Login
      <Formik
        initialValues={{
          email: "sarath@gmx.com",
          password: "1234"
        }}
        onSubmit={values => {
          console.log("Values ", values);
          const { email, password } = values;
          LoginRequest(email, password).then(res => {
            console.log("Re", res);
            const { token = null } = res.data;
            if (token) {
              setToken(token);
              history.push("/dashboard");
            }
          });
        }}
      >
        {({ handleSubmit, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email</label>
                <Field type="email" name="email" />
              </div>
              <div>
                <label>Password</label>
                <Field type="password" name="password" />
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default withRouter(Login);
