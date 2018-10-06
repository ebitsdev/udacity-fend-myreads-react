import React from "react";
import Book from "./Book";

const Bookshelf = props => {
  const bookShelves = props.books;

  return bookShelves.map(bookShelf => {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelf.shelf}</h2>
        <div className="bookshelf-books">
          <Book bookItems={props.books} />
        </div>
      </div>
    );
  });
};

export default Bookshelf;
