import React from "react";

const Book = props => {
  const bookItem = props.bookItems;

  return (
    <ol className="books-grid">
      {bookItem.map(book => {
        return (
          <li key={book.industryIdentifiers[0].identifier}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 192,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                  }}
                />
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">The Adventures of Tom Sawyer</div>
              <div className="book-authors">Mark Twain</div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Book;
