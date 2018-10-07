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
        this.setState({books, reading, toRead, read });
      },
      //   Move a book from one shelf to another
      placeBooks: (shelfId, newShelf, allShelves) => {

        console.log(shelfId, newShelf);

          const newBooks = this.state.books.map(allBooks => {

              const foundID = allShelves[shelfId].find(

                  bookId => bookId === allBooks.id

                  );

              if (foundID){
                  allBooks.shelf = shelfId;
              }
              return allBooks;
          });
        this.state.updateBooks(newBooks);
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
