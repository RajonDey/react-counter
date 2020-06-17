import React from "react";

// Stateless Functional Component
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total Item Selected{" "}
        <span className="badge badge-pill badge-dark">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
