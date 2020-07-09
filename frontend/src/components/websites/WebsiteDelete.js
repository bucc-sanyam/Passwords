import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { deleteWebsite, fetchWebsite } from "../../actions";
import { Link } from "react-router-dom";

class WebsiteDelete extends React.Component {
  componentDidMount() {
    this.props.fetchWebsite(this.props.match.params.name);
  }

  renderContent() {
    if (!this.props.website) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.website.title} ?`;
  }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteWebsite(this.props.match.params.name)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  render() {
    return (
      <Modal
        title="Delete Website"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { website: state.websites[ownProps.match.params.name] };
};
export default connect(mapStateToProps, { fetchWebsite, deleteWebsite })(
  WebsiteDelete
);
