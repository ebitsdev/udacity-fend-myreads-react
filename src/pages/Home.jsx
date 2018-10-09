import React, { Component } from "react";
import BookShelf from "../components/BookShelf";
import Search from "../components/Search";

class Home extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Books</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              placeBooks={this.props.placeBooks}
              books={this.props.books.filter(b => b.shelf === "currentlyReading")}
            />
            <BookShelf title="Want to Read" placeBooks={this.props.placeBooks} books={this.props.books.filter(b => b.shelf === "wantToRead")} />
            <BookShelf title="Read" placeBooks={this.props.placeBooks} books={this.props.books.filter(b => b.shelf === "read")}/>
            <Search placeBooks={this.props.placeBooks} books={this.props.books} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
