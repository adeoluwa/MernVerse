import React, { useState, useEffect } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import './post.css';

import axios from 'axios';

import { format } from 'timeago.js';

import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users?userId/${post.userId}`);
      setUser(res?.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
 
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.user}`}>
              <img
                className="postProfileImg"
                src={user?.profilePicture}
                alt=""
              />
            </Link>
            <span className="postUsername">{user?.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post.desc}
            <img className="postImg" src={PublicFolder + post.photo} alt="" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PublicFolder}like.png`}
              alt=""
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src={`${PublicFolder}heart.jpg`}
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
