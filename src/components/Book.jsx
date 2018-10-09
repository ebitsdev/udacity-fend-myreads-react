import React, { Component } from "react";

class Book extends Component {

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
                backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ""})`
              }}
            />
            <div className="book-shelf-changer">

              <select label="select book" onChange={(ev) => {this.props.placeBooks(this.props.book, ev.target.value)}} value={this.props.book.shelf}>
                <option label="move book" value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          {/* Handle the case when there are no authors found */}
          <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join('\n') : "No authors found"}</div>
        </div>
      </li>
    );
  }
}

export default Book;
