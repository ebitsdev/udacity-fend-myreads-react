import React from "react";
import { Link } from 'react-router-dom';
const SearchPage = props => {
  return (
    <div className="open-search">
     <Link to={"/Search"}>Add a book</Link>
    </div>
  );
};

export default SearchPage;
