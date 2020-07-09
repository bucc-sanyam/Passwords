import React from "react";
import { Field, reduxForm, values } from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import asyncValidate from "./asyncValidate";
import { useState } from "react";

const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error },
}) => {
  // console.log("touch kardia", touched, error);
  return (
    <div>
      <label>{label}</label>
      <div className={asyncValidating ? "async-validating" : ""}>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};
const WebsiteForm = (props) => {
  const { onSubmit, submitting } = props;
  return (
    <form onSubmit={onSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <Field
          name="website"
          type="text"
          component={renderField}
          label="Website"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "WebsiteForm", // a unique identifier for this form
  asyncValidate,
  asyncChangeFields: ["website"],
})(WebsiteForm);
