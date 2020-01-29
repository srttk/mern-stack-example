import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { RegisterUser } from "../../api";
import { REGISTER_VALIDATION_SCHEMA } from "../../validations";

const Register = ({ history }) => {
  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }}
        validationSchema={REGISTER_VALIDATION_SCHEMA}
        onSubmit={values => {
          console.log("Values ", values);
          RegisterUser(values).then(res => {
            history.push("/login");
          });
        }}
        validationSchema={REGISTER_VALIDATION_SCHEMA}
      >
        {({ handleSubmit, isValid }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>First name</label>
                <Field name="firstName" placeholder="First name" />
                <ErrorMessage name="firstName" />
              </div>
              <div>
                <label>Last name</label>
                <Field name="lastName" placeholder="Last name" />
                <ErrorMessage name="lastName" />
              </div>
              <div>
                <label>Email</label>
                <Field name="email" placeholder="Email" />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label>Password</label>
                <Field name="password" placeholder="Password" />
                <ErrorMessage name="password" />
              </div>

              <div>
                <button disabled={!isValid} type="submit">
                  Register
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default withRouter(Register);
