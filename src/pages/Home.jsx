import React, { Component } from "react";
import BookShelf from "../components/BookShelf";
import Search from "../components/Search";
import * as BooksAPI from "../BooksAPI";

class Home extends Component {
  state = {
    books: [],
    reading: [],
    toRead: [],
    read: []
  };
  // Get all the books from the BooksAPI
  componentDidMount() {
    BooksAPI.getAll().then(response => {
      this.setState({
        books: response
      });
    });
  }
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
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Books</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              placeBooks={this.placeBooks}
              books={this.state.books.filter(b => b.shelf === "currentlyReading")}
            />
            <BookShelf title="Want to Read" placeBooks={this.placeBooks} books={this.state.books.filter(b => b.shelf === "wantToRead")} />
            <BookShelf title="Read" placeBooks={this.placeBooks} books={this.state.books.filter(b => b.shelf === "read")}/>
            <Search placeBooks={this.placeBooks} books={this.state.books} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
