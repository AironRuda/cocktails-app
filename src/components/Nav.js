import React from "react";
import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/tables">Home</Link>
          </li>
          <li>
            <Link to="/table">table</Link>
          </li>
        </ul>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      {/* <Outlet /> */}
    </div>
  );
}
export default Nav;
