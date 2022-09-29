import React from 'react';

import './closefriends.css';

const CloseFriends = ({user}) => {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <li className="sidebarFriend">
        <img
          src={PublicFolder+user.profilePicture}
          alt="Daiki"
          className="sidebarFriendImg"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </>
  );
};

export default CloseFriends;
