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
  componentDidMount() {
    BooksAPI.getAll().then(response => {
      this.setState({
        books: response
      });
    });
  }
  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      console.log(book);
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
              updateBooks={this.updateBooks}
              books={this.state.books.filter(b => b.shelf === "currentlyReading")}
            />
            <BookShelf title="Want to Read" updateBooks={this.updateBooks} books={this.state.books.filter(b => b.shelf === "wantToRead")} />
            <BookShelf title="Read" updateBooks={this.updateBooks} books={this.state.books.filter(b => b.shelf === "read")}/>
            <Search updateBooks={this.updateBooks} books={this.state.books} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
