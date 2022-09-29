import React from 'react';

import { Users } from '../../dummyData';

import Online from '../online/Online';

import './rightbar.css';

const RightBar = ({ profile }) => {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="bithdayText">
            <b>Saitama</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ads.png" alt="ads" />
        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Konohagakure</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Konohagakure</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PublicFolder}person/korra.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowinfName">Avatar Korra</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default RightBar;
