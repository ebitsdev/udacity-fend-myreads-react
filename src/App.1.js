import React from "react";
import { Switch, Route } from "react-router-dom";
import BookShelf from "./components/BookShelf";
import Search from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    currentReading: [],
    wantToRead: [],
    booksRead: [],
    updateBooks : books => {
      const currentReading = books.filter(book => book.shelf === "currentlyReading");
      const wantToRead = books.filter(book => book.shelf === "wantToRead");
      const read = books.filter(book => book.shelf === "read");
      this.setState(books, currentReading, wantToRead, read);
    },
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  async componentDidMount() {
    try {
      const bookshelves = await BooksAPI.getAll();
      this.state.updateBooks(bookshelves);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="app">

        {/* {this.getBooks()}; */}
        <Search />
        <div className="books">
          <BookShelf booksCurrent={this.state.currentReading} />
          {/* <BookShelf booksWantToRead={this.state.wantToRead} /> */}
          {/* <BookShelf booksRead={this.state.booksRead} /> */}
          {/* <BookShelf books={this.state.books} /> */}
        </div>
      </div>
    );
  }
}

export default BooksApp;
