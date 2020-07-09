import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import asyncValidate from "./asyncValidate";

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "password",
    "userName",
    "website",
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const PasswordForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }} className="row">
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
          variant="outlined"
          xs={6}
        />
        <Field
          name="lastName"
          component={renderTextField}
          label="Last Name"
          variant="outlined"
          style={{ marginLeft: "10px" }}
          xs={6}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Field
          name="email"
          component={renderTextField}
          label="Email"
          variant="outlined"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Field
          name="website"
          component={renderTextField}
          label="Website"
          variant="outlined"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Field
          name="userName"
          component={renderTextField}
          label="User Name"
          variant="outlined"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Field
          name="password"
          component={renderTextField}
          label="Password"
          variant="outlined"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Field
          name="phoneNumber"
          component={renderTextField}
          label="Phone Number"
          variant="outlined"
        />
      </div>
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Extra Info"
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <button
          type="submit"
          variant="outlined"
          color="secondary"
          disabled={pristine || submitting}
        >
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "PasswordForm", // a unique identifier for this form
  validate,
  asyncValidate,
})(PasswordForm);
