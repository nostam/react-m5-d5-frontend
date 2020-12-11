import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import MyNavBar from "./components/MyNavBar";
import Registration from "./components/Registration";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <MyNavBar title="M5 Book store!" />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Registration} />
      </Router>
    );
  }
}

export default App;
