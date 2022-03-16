import React, { useEffect, useState } from "react";
import User from "./User";
import "./users.css";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [displayUser, setDisplayUser] = useState([]);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=15`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setDisplayUser(data.results);
      });
  }, []);

  // handle change event of search input

  // filter records by search text
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const lowercasedValue = searchValue.toLowerCase().trim();
    const filteredData = users.filter((item) => {
      return Object.keys(item.name).some((key) =>
        item.name[key]?.toLowerCase().includes(lowercasedValue)
      );
    });
    setDisplayUser(filteredData);
  };

  return (
    <div>
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
                onChange={handleSearch}
              />
            </form>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="all_user">
          {displayUser.map((user) => (
            <User user={user} key={user.name.first}></User>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
