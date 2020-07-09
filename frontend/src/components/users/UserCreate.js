import React from "react";
import { connect } from "react-redux";
import { createPassword } from "../../actions";
import PasswordForm from "./PasswordForm";

class PasswordCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createPassword(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create User</h3>
        <PasswordForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createPassword })(PasswordCreate);
