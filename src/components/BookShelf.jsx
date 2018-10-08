import React, { Component } from "react";
import Book from "./Book";

class Bookshelf extends Component {
  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* Check for books and if they exist then render them */}
            {this.props.books &&
              this.props.books.map(book => (
                <Book
                  key={book.id}
                  placeBooks={this.props.placeBooks} book={book}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
