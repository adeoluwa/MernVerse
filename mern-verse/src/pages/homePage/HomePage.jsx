import React from 'react';

import TopBar from '../../components/top bar/TopBar';

import SideBar from '../../components/sideBar/SideBar';

import Feeds from '../../components/feeds/Feeds';

import RightBar from '../../components/rightbar/RightBar';

import './home.css';

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feeds />
        <RightBar />
        {/*  */}
      </div>
    </>
  );
};

export default Home;
