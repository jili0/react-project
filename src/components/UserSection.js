import React from "react";
import UserManageAccount from "./UserManageAccount";
import "../stylesheets/userSection.css";

const UserSection = ({ auth }) => {
  const userPhoto = auth.currentUser.photoURL ? (
    <img
      className="user-photo"
      src={auth.currentUser.photoURL}
      alt="current user"
    />
  ) : (
    <svg
      className="user-photo-default"
      xmlns="http://www.w3.org/2000/svg"
      height="50"
      width="50"
      viewBox="0 0 448 512"
    >
      {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
    </svg>
  );

  return (
    <>
      <div className="userSection">
        <h2 className="welcomeMessage">
          Hello,&nbsp;
          {auth.currentUser.displayName
            ? auth.currentUser.displayName.split(" ")[0]
            : null}
          !
        </h2>
        {userPhoto}
        <div className="userInfo">
          <p>{auth.currentUser.email}</p>
          <p>
            {auth.currentUser.emailVerified
              ? "(Email verified)"
              : "(Email not verified yet)"}
          </p>
        </div>
        <hr />
      </div>
      <UserManageAccount auth={auth} />
    </>
  );
};

export default UserSection;