import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import SignUpForm from "./components/forms/SignUp";
import Login from "./components/forms/Login";
import Issues from "./components/issues/Issues";

function App() {
  if (localStorage.getItem("token")) {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Issues} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignUpForm} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
  }
}
export default connect(mapStateToProps)(App);

