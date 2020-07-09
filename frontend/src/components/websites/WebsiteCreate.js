import React from "react";
import { connect } from "react-redux";
import { createWebsite } from "../../actions";
import WebsiteForm from "./WebsiteForm";

class WebsiteCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createWebsite(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create Website</h3>
        <WebsiteForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createWebsite })(WebsiteCreate);
