import React from "react";
// import * as BooksAPI from './BooksAPI'
import BookShelf from "./components/BookShelf";
import Search from "./components/SearchBooks";
import * as BooksAPI from './BooksAPI';
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    currentReading: [],
    wantToRead: [],
    booksRead: [],
    updateShelves: () => {

    },
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }
  render() {
    return (
      <div className="app">
        {/* {this.getBooks()}; */}
        <Search />
        <div className="books">
          <BookShelf books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default BooksApp;
