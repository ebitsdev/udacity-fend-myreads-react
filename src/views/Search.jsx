import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from '../components/Book';

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookQuery: "",
      books: []
    };
  }
  handleSearch = async ev => {
    try {
      const bookQuery = ev.target.value;
      ev.persist();
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
            const searchedBook = this.props.books.find(bookFound => bookFound.id === book.id);
           if (searchedBook){
             book.shelf = searchedBook.shelf;
             console.log(searchedBook);
           } else {
            //  We need to place the found book in the none shelf so we can select any of the other 3 shelves
             book.shelf = "none";
           }

            return <Book key={book.id} {...book} placeBooks={this.props.placeBooks} />
          })}
          {this.state.books.length === 0 && <h2 className="no-result-found">No book found</h2>}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;
