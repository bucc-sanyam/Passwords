import React from "react";
import { connect } from "react-redux";
import { fetchWebsite, editWebsite } from "../../actions";
import WebsiteForm from "./WebsiteForm";
import _ from "lodash";

class WebsiteEdit extends React.Component {
  componentDidMount() {
    this.props.fetchWebsite(this.props.match.params.name);
  }

  onSubmit = (formValues) => {
    this.props.editWebsite(this.props.match.params.name, formValues);
  };

  render() {
    if (!this.props.website) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit Website </h3>
        <WebsiteForm
          initialValues={_.pick(this.props.website, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { website: state.websites[ownProps.match.params.name] };
};

export default connect(mapStateToProps, { fetchWebsite, editWebsite })(
  WebsiteEdit
);
