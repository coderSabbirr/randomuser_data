import React from "react";
import Users from "../Pages/Users/Users";

const Home = (searchValue) => {
  return (
    <div>
      <Users searchValue={searchValue} />
    </div>
  );
};

export default Home;
