import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search, update } from "../BooksAPI";
import Book from '../components/Book';

class SearchBook extends Component {
  state = {
    books: [],
    bookQuery: ""
  };

  placeBooks = (book, shelf) => {
    update(book, shelf).then(response => {
      book.shelf = shelf;

      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };
  handleSearch = async ev => {
    try {
      const bookQuery = ev.target.value;
      this.setState({ bookQuery });
      if (bookQuery.trim()) {
        const searchResults = await search(bookQuery);

        if (searchResults.error) {
          this.setState({ books: [] });
        } else {
          this.setState({ books: searchResults });
        }
      } else {
        this.setState({books: []});
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={"/"}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
      NOTES: The search from BooksAPI is limited to a particular set of search terms.
      You can find these search terms here:
      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
      you don't find a specific author or title. Every search is limited by search terms.
    */}
            <input
              onChange={this.handleSearch}
              type="text"
              value={this.state.bookQuery}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.books.length > 0 && this.state.books.map(book => {
            console.log(book);

            const searchedBook = this.state.books.find(bookFound => bookFound.id === book.id);
           if (searchedBook){
             book.shelf = searchedBook.shelf;

           } else {
            //  We need to place the found book in the none shelf so we can select any of the other 3 shelves
             book.shelf = "none";
           }

            return <Book
            key={book.id}
            placeBooks={this.placeBooks} book={book}
          />
          })}
          {this.state.books.length === 0 && <h2 className="no-result-found">No result found</h2>}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;
