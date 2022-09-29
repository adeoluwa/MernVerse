import React from 'react';

import TopBar from '../../components/top bar/TopBar';

import SideBar from '../../components/sideBar/SideBar';

import Feeds from '../../components/feeds/Feeds';

import RightBar from '../../components/rightbar/RightBar';

import './profile.css';

const Profile = () => {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${PublicFolder}post/sunset 2.jpg`}
                alt="jin"
                className="profileCoverImg"
              />
              <img
                src={`${PublicFolder}person/geno.jpg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Black Shinobi</h4>
              <span className="profileInfoDesc">
                Web Developer || Otaku || Messi Fan || NF Stan
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feeds username="shinobi" />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
