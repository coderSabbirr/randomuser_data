import React from "react";
import "./user.css";
const User = ({ user }) => {
  const { name, picture, location, email, dob } = user;
  return (
    <div className="">
      <div className="user_card">
        <div className="d-flex ">
          <div className="d-flex justify-content-center">
            <img className="user_img" src={picture.medium} alt="" />
          </div>
          <div className="p-2 pt-3 d-flex ">
            <div>
              <p className="user_name">
                {name.title}. {name.first} {name.last} | {dob.age}
              </p>
              <p className="user_email">{email}</p>
              <p className="location">
                {location.city} {location.state} {location.country}{" "}
                {location.postcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
