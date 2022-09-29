import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import PersonIcon from '@mui/icons-material/Person';

import ChatIcon from '@mui/icons-material/Chat';

import NotificationsIcon from '@mui/icons-material/Notifications';

import { NavLink } from 'react-router-dom';

import './topbar.css';

const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">MernVerse</span>
        </NavLink>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friend, post or video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/Thorfin.jpg"
          alt="profile"
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default TopBar;
