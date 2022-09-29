import React from 'react';

import PermMediaIcon from '@mui/icons-material/PermMedia';

import LabelIcon from '@mui/icons-material/Label';

import RoomIcon from '@mui/icons-material/Room';

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import './share.css';

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/person/geno.jpg"
            alt="onepunch"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="What's on your mind"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
    //
  );
};

export default Share;
