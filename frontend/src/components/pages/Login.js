import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { setToken } from "../../lib/TokenManager";
import { Login as LoginRequest } from "../../api";
import { LOGIN_VALIDATION_SCHEMA } from "../../validations";

const Login = ({ history }) => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "sarath@gmx.com",
          password: "1234"
        }}
        validationSchema={LOGIN_VALIDATION_SCHEMA}
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
        {({ handleSubmit, errors, isValid }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" />
              </div>
              <div>
                <button disabled={!isValid} type="submit">
                  Login
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default withRouter(Login);
