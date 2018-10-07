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
            const foundShelf = this.props.books.find(bookFound => bookFound.id === book.id);
           if (foundShelf){
             book.shelf = foundShelf.shelf;
             console.log(foundShelf);
           } else {
             book.shelf = "No book";
           }

            return <Book key={book.id} {...book} placeBooks={this.props.placeBooks} />
          })}
          {this.state.books.length === 0 && <h2 style={{textAlign: "center"}}>No book found</h2>}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;
