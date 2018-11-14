import React, { Suspense, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import { Main, Login } from "./components";

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/login" render={() => <Login />} />
          <Route exact path="/" render={() => <Main />} />
        </Suspense>
      </Router>
    );
  }
}

export default App;
