import React, { useState, useEffect } from 'react';

import Share from '../share/Share';

import Post from '../post/Post';

import './feeds.css';

import axios from 'axios';

// import { Posts } from '../../dummyData';

const Feeds = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = axios.get('posts /timeline/63356fdc3520368c22615711');
      console.log(res);
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
};

export default Feeds;
