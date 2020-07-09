import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWebsites } from "../../actions";

class WebsiteList extends React.Component {
  componentDidMount() {
    this.props.fetchWebsites();
  }
  renderAdminButtons(website) {
    return (
      <div className="right floated content">
        <Link
          to={`/websites/edit/${website.name}`}
          className="ui button primary"
        >
          Edit
        </Link>
        <Link
          to={`/websites/delete/${website.name}`}
          className="ui button negative"
        >
          Delete
        </Link>
      </div>
    );
  }

  renderList() {
    return (
      this.props.websites &&
      this.props.websites.map((website) => {
        return (
          <div className="item" key={website.name}>
            {this.renderAdminButtons(website)}
            <i className="large middle aligned icon camera" />
            <div className="content">
              <Link to={`websites/${website.name}`} className="header">
                {website.title}
              </Link>
              <div className="description">{website.description}</div>
            </div>
          </div>
        );
      })
    );
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/websites/new" className="ui button primary">
            Create Website
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div>
          <h2>Websites</h2>
          {this.renderCreate()}
          <div className="ui celled list">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state && state.websites) {
    return {
      websites: Object.values(state.websites),
      currentUserId: state.auth.userId,
      isSignedIn: state.auth.isSignedIn,
    };
  } else {
    return {
      websites: "",
      currentUserId: state.auth.userId,
      isSignedIn: state.auth.isSignedIn,
    };
  }
};

export default connect(mapStateToProps, { fetchWebsites })(WebsiteList);
