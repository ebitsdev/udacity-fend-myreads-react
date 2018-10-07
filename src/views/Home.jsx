import React, { Component } from "react";
import BookShelf from "../components/BookShelf";
import Favorite from "../components/Favorite";
import * as BooksAPI from "../BooksAPI";

class Home extends Component {
  async componentDidMount() {
    // Get all the books from the BOOKSAPI
    try {
      const books = await BooksAPI.getAll();

      this.props.updateBooks(books);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* Set the 3 book shelves using the books props */}
            {/* Handle placing books in each bookshelf */}
            <BookShelf placeBooks={this.props.placeBooks} books={this.props.reading} title="Currently Reading" />
            <BookShelf placeBooks={this.props.placeBooks} books={this.props.toRead} title="Want to Read" />
            <BookShelf placeBooks={this.props.placeBooks} books={this.props.read} title="Read" />
            <Favorite />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
