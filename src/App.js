import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import BookShelf from "./components/BookShelf";
// import Search from "./components/SearchBooks";
// import * as BooksAPI from "./BooksAPI";
import Home from './views/Home';
import Search from './views/Search';
import Provider, {ProviderContext} from './provider';
import "./App.css";

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
      <Provider>
      <Switch>
      <Route
              path={"/"}
              exact
              render={() => (
                <ProviderContext.Consumer>
                  {context => <Home {...context} />}
                </ProviderContext.Consumer>
              )}

            />
        <Route exact path={"/Search"}
        render={() => (
          <ProviderContext.Consumer>
            {context => <Search {...context} />}
          </ProviderContext.Consumer>
        )}
        />
      </Switch>
      </Provider>
      </div>
    );
  }
}

export default BooksApp;