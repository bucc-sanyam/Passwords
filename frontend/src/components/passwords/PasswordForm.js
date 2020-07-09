import React from "react";
import { Field, reduxForm, values } from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import asyncValidate from "./asyncValidate";
import { useState } from "react";

const validate = (values) => {
  let myEmail = "";
  const updateEmail = (email) => {
    myEmail = email;
  };
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
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setChecked(!checked);
    console.log(checked);
    !checked ? setUsername(email) : setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <Field
          name="website"
          component={renderTextField}
          label="Website"
          variant="outlined"
          disabled
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <Field
          name="email"
          label="Email"
          variant="outlined"
          component={renderTextField}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <Field
          name="userName"
          label="User Name"
          variant="outlined"
          component={renderTextField}
        />
        {/*<FormControlLabel*/}
        {/*  control={*/}
        {/*    <Checkbox*/}
        {/*      checked={checked}*/}
        {/*      value={checked}*/}
        {/*      onChange={handleChange}*/}
        {/*      name="checkedUsername"*/}
        {/*      color="primary"*/}
        {/*    />*/}
        {/*  }*/}
        {/*  label="Same as email"*/}
        {/*/>*/}
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
