import React from "react";
import Book from "./Book";

const Bookshelf = props => {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* Check for books and if they exist then render them */}
            {props.books &&
              props.books.map(book => (
                <Book
                  key={book.id}
                  placeBooks={props.placeBooks} book={book}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }

export default Bookshelf;
