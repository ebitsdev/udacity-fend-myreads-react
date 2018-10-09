import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PageNotFound from './pages/404'

import "./App.css";

class BooksApp extends Component {
  state = {
    books: []
  };
  // Get all the books from the BooksAPI
  componentDidMount() {
    BooksAPI.getAll().then(response => {
      this.setState({
        books: response
      });
    });
  }

  // This allows to pass as props to all children if needed
  placeBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };
  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => (
              <Home books={this.state.books} placeBooks={this.placeBooks} />
            )}
          />
          <Route
            exact
            path={"/Search"}
            render={() => (
              <Search placeBooks={this.placeBooks} books={this.state.books} />
            )}
          />
              {/* Handle page not found */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
