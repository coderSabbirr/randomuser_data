import React from "react";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid ps-5">
          <a className="navbar-brand" href=".....">
            Navbar
          </a>
          <form className="d-flex">
            <input
              className="form-control me-4"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => props.search(e.target.value)}
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
