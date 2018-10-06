import React, {Component} from "react";
import BookShelf from "../components/BookShelf";
import Favorite from "../components/Favorite";
import * as BooksAPI from '../BooksAPI';

class Home extends Component {
  state = {
    books: [],
   }
   componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      console.log(books)
    })
  }
  render() {

    return (

      <div className="list-books">
      {console.log('It is working')};
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={this.state.books} />
            <Favorite />
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
