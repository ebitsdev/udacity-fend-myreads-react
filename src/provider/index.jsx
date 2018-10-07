import React, { Component } from "react";
export const ProviderContext = React.createContext();

// Use React Context to pass down state info
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      reading: [],
      toRead: [],
      read: [],
      updateBooks: books => {
        const reading = books.filter(book => book.shelf === "currentlyReading");
        const toRead = books.filter(book => book.shelf === "wantToRead");
        const read = books.filter(book => book.shelf === "read");
        this.setState({ books, reading, toRead, read });
      },
      //   Move a book from one shelf to another
      placeBooks: (shelfId, bookItem, allShelves) => {

        const relocatedBooks = this.state.books.map(books => {
            // Get the book id for moved book
          const foundID = allShelves[shelfId].find(
            bookId => bookId === books.id
          );

          if (foundID) {
            //   This was causing a bug in moving the books around
            books.shelf = shelfId;
          }
          return books;
        });
        this.state.updateBooks(relocatedBooks);
      }
    };
  }
  render() {
    return (
      // Pass all state elements to the children
      <ProviderContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProviderContext.Provider>
    );
  }
}

export default index;
