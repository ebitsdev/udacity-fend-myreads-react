import React from 'react';
import { Link } from "react-router-dom";
const PageNotFound = ({ location }) => (
    <div>
      <div className="container-not-found">
        <h1>404</h1>
        <p>
          <strong>Page not found :(</strong>
        </p>
        <p>
          The requested page <code>{location.pathname}</code> could not be found.
        </p>
        <Link text="test" to='/'>Go Home</Link>
      </div>
    </div>
  );
  export default PageNotFound