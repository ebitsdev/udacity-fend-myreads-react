import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

import "./App.css";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path={"/"} render={() => <Home />}/>
          <Route exact path={"/Search"} render={() => <Search />}/>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
