import React, { Component } from "react";
import { update } from "../BooksAPI";

class Book extends Component {

  // Create a book change handler
  bookhandler = async e => {
    try {
      const targetShelf = e.target.value;

      const selectedBookId = this.props;

      const bookResult = await update(selectedBookId, targetShelf);

      this.props.placeBooks(targetShelf, selectedBookId, bookResult);

    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${this.props.imageLinks ? this.props.imageLinks.thumbnail : ""})`
              }}
            />
            <div className="book-shelf-changer">
            
              <select onChange={this.bookhandler} value={this.props.shelf}>
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
          <div className="book-title">{this.props.title}</div>
          {/* Handle the case when there are no authors found */}
          <div className="book-authors">{this.props.authors ? this.props.authors : "No authors found"}</div>
        </div>
      </li>
    );
  }
}

export default Book;
