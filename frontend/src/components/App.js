import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import PasswordList from "./passwords/PasswordList";
import PasswordCreate from "./passwords/PasswordCreate";
import PasswordEdit from "./passwords/PasswordEdit";
import PasswordDelete from "./passwords/PasswordDelete";
import WebsiteCreate from "./websites/WebsiteCreate";
import WebsiteList from "./websites/WebsiteList";
import WebsiteShow from "./websites/WebsiteShow";
import WebsiteEdit from "./websites/WebsiteEdit";
import WebsiteDelete from "./websites/WebsiteDelete";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <div>
            <Switch>
              <Route path="/" exact component={WebsiteList} />
              <Route path="/passwords" exact component={PasswordList} />
              <Route path="/passwords/new" exact component={PasswordCreate} />
              <Route
                path="/passwords/edit/:id"
                exact
                component={PasswordEdit}
              />
              <Route
                path="/passwords/delete/:id"
                exact
                component={PasswordDelete}
              />
              <Route path="/websites/new" exact component={WebsiteCreate} />
              <Route path="/websites/:name" exact component={WebsiteShow} />
              <Route
                path="/websites/edit/:name"
                exact
                component={WebsiteEdit}
              />
              <Route
                path="/websites/delete/:name"
                exact
                component={WebsiteDelete}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
